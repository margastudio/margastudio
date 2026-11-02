import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

type Phase = 'scatter' | 'line' | 'circle'
type Target = { x: number; y: number; rotation: number; scale: number; opacity: number }

const IMAGES = [
  '/images/16h8q41rsre6ibhuycminhsng.jpg', '/images/2utnej5atl2k3njaefwmbnra.jpg',
  '/images/5ilrvlyxf72khsvhqpa3sngzju.jpg', '/images/bynxev1zjyb9bhwh1iwbz1zos60.jpg',
  '/images/f9riwonpmlcmqvrihz8l8wyfei.jpg', '/images/gfgkadagm4keibnciiruwlfrr0.jpg',
  '/images/j48zrvjlwq2fz6ss6vgxs42sw.jpg', '/images/kupxxsiobj8o6o6tohllgzdg.jpg',
  '/images/mof97izxxht3unpcs6y9zsjo2bu.jpg', '/images/raieyq1l35xmlhuu6svlrxhani.jpg',
  '/images/tkurwegixffcx6fcmxearkf5oo.jpg', '/images/2vt2fsmzvptxsiev8zucoqvshk.jpg',
  '/images/mbh8xzc2f8x6uegn0mkfgq3uvdw.webp', '/images/ma3cfyrxgiayvrwdpwugsaarga.webp',
  '/images/iw0rwwsuqmp50qtapit9hbomni.webp', '/images/izzaswplfxa0fdz7bp57uzwaa.webp',
  '/images/sfyalaumgxmvcnarvhl7lzjai.webp', '/images/swckcaqxxpjaxmycntbjniwjnza.webp',
  '/images/5tr3lvfqvalweno1pwcfdcpyfm.webp', '/images/comydsrbrvzzlf6gpuvyoueoju.png',
]
const MAX_SCROLL = 3000
const lerp = (a: number, b: number, t: number) => a * (1 - t) + b * t

function FlipCard({ src, index, target }: { src: string; index: number; target: Target }) {
  return <motion.div className="morph-card" animate={target} transition={{ type: 'spring', stiffness: 40, damping: 15 }}>
    <motion.div className="morph-card-inner" whileHover={{ rotateY: 180 }} transition={{ duration: .6, type: 'spring', stiffness: 260, damping: 20 }}>
      <div className="morph-card-face morph-card-front"><img src={src} alt={`Marga Studio project ${index + 1}`} /><span /></div>
      <div className="morph-card-face morph-card-back"><small>VIEW</small><b>Details</b></div>
    </motion.div>
  </motion.div>
}

export default function ScrollMorphHero() {
  const [phase, setPhase] = useState<Phase>('scatter')
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [morph, setMorph] = useState(0)
  const [rotation, setRotation] = useState(0)
  const [parallax, setParallax] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const scrollRef = useRef(0)
  const scroll = useMotionValue(0)
  const smoothMorph = useSpring(useTransform(scroll, [0, 600], [0, 1]), { stiffness: 40, damping: 20 })
  const smoothRotation = useSpring(useTransform(scroll, [600, MAX_SCROLL], [0, 360]), { stiffness: 40, damping: 20 })
  const mouseX = useSpring(useMotionValue(0), { stiffness: 30, damping: 20 })

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new ResizeObserver(([entry]) => setSize({ width: entry.contentRect.width, height: entry.contentRect.height }))
    observer.observe(node)
    const onWheel = (event: WheelEvent) => {
      const next = Math.min(MAX_SCROLL, Math.max(0, scrollRef.current + event.deltaY))
      if (next !== scrollRef.current) event.preventDefault()
      scrollRef.current = next
      scroll.set(next)
    }
    let touchY = 0
    const onTouchStart = (event: TouchEvent) => { touchY = event.touches[0].clientY }
    const onTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0].clientY
      const delta = touchY - currentY
      const next = Math.min(MAX_SCROLL, Math.max(0, scrollRef.current + delta))
      if (next !== scrollRef.current) event.preventDefault()
      scrollRef.current = next
      scroll.set(next)
      touchY = currentY
    }
    const onMouse = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect()
      mouseX.set(((event.clientX - rect.left) / rect.width * 2 - 1) * 64)
    }
    node.addEventListener('wheel', onWheel, { passive: false })
    node.addEventListener('touchstart', onTouchStart, { passive: true })
    node.addEventListener('touchmove', onTouchMove, { passive: false })
    node.addEventListener('mousemove', onMouse)
    return () => { observer.disconnect(); node.removeEventListener('wheel', onWheel); node.removeEventListener('touchstart', onTouchStart); node.removeEventListener('touchmove', onTouchMove); node.removeEventListener('mousemove', onMouse) }
  }, [scroll, mouseX])

  useEffect(() => {
    const a = setTimeout(() => setPhase('line'), 500)
    const b = setTimeout(() => setPhase('circle'), 2500)
    const u1 = smoothMorph.on('change', setMorph)
    const u2 = smoothRotation.on('change', setRotation)
    const u3 = mouseX.on('change', setParallax)
    return () => { clearTimeout(a); clearTimeout(b); u1(); u2(); u3() }
  }, [smoothMorph, smoothRotation, mouseX])

  const scatter = useMemo(() => IMAGES.map(() => ({ x: (Math.random() - .5) * 1500, y: (Math.random() - .5) * 900, rotation: (Math.random() - .5) * 180, scale: .6, opacity: 0 })), [])
  const contentOpacity = useTransform(smoothMorph, [.8, 1], [0, 1])
  const contentY = useTransform(smoothMorph, [.8, 1], [20, 0])

  return <section ref={ref} className="scroll-morph-hero" aria-label="Marga Studio introduction">
    <div className="hero-inner">
      <div className="intro-copy">
        <motion.h1 initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }} animate={phase === 'circle' && morph < .5 ? { opacity: 1 - morph * 2, y: 0, filter: 'blur(0px)' } : { opacity: 0, filter: 'blur(10px)' }} transition={{ duration: 1 }}>Marga Studio</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={phase === 'circle' && morph < .5 ? { opacity: .5 - morph } : { opacity: 0 }} transition={{ duration: 1, delay: .2 }}>SCROLL TO EXPLORE</motion.p>
      </div>
      <motion.div className="arc-copy" style={{ opacity: contentOpacity, y: contentY }}>
        <h2>Explore Our Vision</h2>
        <p>Discover a world where technology meets creativity.<br className="desktop-break" /> Scroll through our curated collection of innovations designed to shape the future.</p>
      </motion.div>
      <div className="cards-stage">{IMAGES.map((src, i) => {
        let target: Target
        if (phase === 'scatter') target = scatter[i]
        else if (phase === 'line') target = { x: i * 70 - IMAGES.length * 35, y: 0, rotation: 0, scale: 1, opacity: 1 }
        else {
          const mobile = size.width < 768
          const radius = Math.min(Math.min(size.width, size.height) * .35, 350)
          const angle = i / IMAGES.length * 2 * Math.PI
          const arcRadius = Math.min(size.width, size.height * 1.5) * (mobile ? 1.4 : 1.1)
          const spread = mobile ? 100 : 130
          const bounded = -Math.min(Math.max(rotation / 360, 0), 1) * spread * .8
          const current = -90 - spread / 2 + i * spread / (IMAGES.length - 1) + bounded
          const rad = current * Math.PI / 180
          const arc = { x: Math.cos(rad) * arcRadius + parallax, y: Math.sin(rad) * arcRadius + size.height * (mobile ? .35 : .25) + arcRadius, rotation: current + 90, scale: mobile ? 1.4 : 1.8, opacity: 1 }
          target = { x: lerp(Math.cos(angle) * radius, arc.x, morph), y: lerp(Math.sin(angle) * radius, arc.y, morph), rotation: lerp(i / IMAGES.length * 360 + 90, arc.rotation, morph), scale: lerp(1, arc.scale, morph), opacity: 1 }
        }
        return <FlipCard key={src} src={src} index={i} target={target} />
      })}</div>
      <div className="hero-scroll-note">Scroll to move through the collection <span aria-hidden="true">↓</span></div>
    </div>
  </section>
}
