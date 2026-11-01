/*
 * Marga Studio — case studies (EN / ES / ZH)
 * Fuente: CASE_STUDIES_DATA_COMPLETA_md.pdf + Marga_Studio-case_studies-claude.docx
 *
 * - Todo el copy en inglés sale tal cual de tus documentos (solo se quitaron
 *   instrucciones internas tipo "Say why:" y los bloques ⟨…⟩ que eran notas).
 * - ES y ZH son traducciones nuevas de ese copy. No se agregó ningún dato nuevo.
 * - **negrita** se renderiza como <strong>.
 * - href: null = falta el link real (prototipo, PDF, sitio). El renderer oculta
 *   el botón hasta que lo completes.
 * - gallery: [] = acá van los mockups reales cuando los tengas (ver formato abajo).
 * - Las claves ('/projects/…') deben coincidir con el path real de cada página.
 */
(function (root) {
  var t = function (en, es, zh) { return { en: en, es: es, zh: zh }; };
  var L = {
    context: t(`Context`, `Contexto`, `背景`),
    decision: t(`Decision`, `Decisión`, `决策`),
    evidence: t(`Evidence`, `Evidencia`, `依据`),
    why: t(`Why`, `Por qué`, `原因`)
  };
  var S = {
    problem: t(`The problem`, `El problema`, `问题`),
    objective: t(`The objective`, `El objetivo`, `目标`),
    evidence: t(`Evidence`, `Evidencia`, `研究依据`),
    keyDecision: t(`Key decision`, `Decisión clave`, `关键决策`),
    learning: t(`Learning`, `Aprendizaje`, `收获`)
  };

  /* Formato de gallery (cuando tengas las imágenes):
     { src: '/assets/projects/tribuxmusic/persona.webp',
       alt: t(`…`, `…`, `…`), caption: t(`…`, `…`, `…`) } */

  var CASES = {

    /* ───────────────────────── 01 · TRIBUXMUSIC ───────────────────────── */
    '/projects/tribuxmusic': {
      slug: 'tribuxmusic',
      name: `TribuxMusic`,
      type: 'principal',
      order: 1,
      category: t(`Products`, `Productos`, `产品`),
      hero: {
        tagline: t(`Conéctate con la música — your artists, your music, your people.`,
                   `Conéctate con la música — your artists, your music, your people.`,
                   `Conéctate con la música — your artists, your music, your people.`),
        description: t(
          `A mobile product that turns concert discovery in Buenos Aires from a scavenger hunt into one social experience.`,
          `Un producto móvil que convierte el descubrimiento de conciertos en Buenos Aires, de una búsqueda del tesoro, en una única experiencia social.`,
          `一款移动产品，把在布宜诺斯艾利斯发现演唱会的过程，从一场“寻宝游戏”变成一种统一的社交体验。`),
        meta: t(
          `2025 · Personal project · Solo — research, IA, UX/UI, testing`,
          `2025 · Proyecto personal · Solo — research, IA, UX/UI, testing`,
          `2025 · 个人项目 · 独立完成——研究、信息架构、UX/UI、测试`),
        tags: {
          en: [`UX Research`, `Information Architecture`, `UX/UI`, `Design System`, `Prototype`],
          es: [`UX Research`, `Arquitectura de información`, `UX/UI`, `Design System`, `Prototipo`],
          zh: [`UX 研究`, `信息架构`, `UX/UI`, `设计系统`, `原型`]
        },
        badges: []
      },
      seo: t(
        `TribuxMusic: a mobile product that makes concert discovery in Buenos Aires easier and more social. UX research, IA and UI design by Marga Studio.`,
        `TribuxMusic: un producto móvil que hace más fácil y más social descubrir conciertos en Buenos Aires. Research UX, IA y diseño UI por Marga Studio.`,
        `TribuxMusic：让在布宜诺斯艾利斯发现演唱会更轻松、更具社交性的移动产品。Marga Studio 完成 UX 研究、信息架构与 UI 设计。`),
      sections: [
        { id: 'problem', title: S.problem, intro: [
          t(`Finding out that a band you love is playing tonight shouldn’t depend on luck. In Buenos Aires it does. Concert information is scattered across ticketing platforms, artist pages, Instagram and word of mouth, and none of those sources talk to each other. The result is a specific kind of failure: people who care deeply about live music find out about the show the day after.`,
            `Enterarte de que una banda que te encanta toca esta noche no debería depender de la suerte. En Buenos Aires, depende. La información de los conciertos está dispersa entre plataformas de ticketing, páginas de artistas, Instagram y el boca a boca, y ninguna de esas fuentes se comunica con las otras. El resultado es una falla muy concreta: quienes viven la música en vivo se enteran del show al día siguiente.`,
            `得知自己喜欢的乐队今晚演出，本不该靠运气。但在布宜诺斯艾利斯，恰恰如此。演出信息分散在票务平台、艺人主页、Instagram 和口口相传之中，彼此互不相通。结果是一种非常具体的失败：真心热爱现场音乐的人，往往第二天才知道演出的消息。`),
          t(`Emerging Argentine artists have the mirror problem. Without mass-media support and without dedicated digital spaces, reaching an audience is a self-management job — and the audience never learns the scene exists.`,
            `Los artistas emergentes argentinos enfrentan el problema inverso. Sin apoyo de los medios masivos y sin espacios digitales dedicados, llegar al público es una tarea de autogestión, y el público nunca se entera de que la escena existe.`,
            `阿根廷的新兴艺人面临的是镜像问题。没有大众媒体的支持，也没有专属的数字空间，触达观众只能靠自我运营——而观众甚至不知道这个音乐圈子的存在。`)
        ] },
        { id: 'objective', title: S.objective, intro: [
          t(`**Make live-music discovery easier, more relevant and more social.** Three product priorities: **inform**, **connect**, **encourage**.`,
            `**Hacer que descubrir música en vivo sea más fácil, más relevante y más social.** Tres prioridades de producto: **informar**, **conectar**, **incentivar**.`,
            `**让发现现场音乐更轻松、更贴合个人、更具社交性。**三项产品优先级：**告知**、**连接**、**激励**。`),
          t(`**Who it’s for:** people aged 18–30 in Buenos Aires who follow live music actively and organise outings around it.`,
            `**Para quién es:** personas de 18 a 30 años en Buenos Aires que siguen activamente la música en vivo y organizan sus salidas alrededor de ella.`,
            `**目标用户：**18–30 岁、生活在布宜诺斯艾利斯、积极关注现场音乐并围绕演出安排出行的人群。`)
        ] },
        { id: 'evidence', title: S.evidence,
          intro: [t(
            `This is the part of the project I’d put forward first, because the product decisions came out of it rather than the other way round.`,
            `Esta es la parte del proyecto que pondría en primer lugar, porque las decisiones de producto salieron de acá y no al revés.`,
            `这是我最想优先展示的部分，因为产品决策是从这些研究中得出的，而不是反过来。`)],
          items: [
            t(`**Competitive benchmark — Spotify, Bandsintown, Wegow.** Measured on three axes: steps per action, design quality, and error handling. Spotify buries live events under everything else and offers no search or filter — only recommendations. Bandsintown has good Argentine coverage but confusing navigation and no news, recommendations or community. Wegow has the community layer but throws users out of the app to read about an artist, and its Argentine catalogue is close to empty.`,
              `**Benchmark competitivo — Spotify, Bandsintown, Wegow.** Medido en tres ejes: pasos por acción, calidad de diseño y manejo de errores. Spotify esconde los eventos en vivo debajo de todo lo demás y no ofrece búsqueda ni filtros, solo recomendaciones. Bandsintown tiene buena cobertura argentina, pero una navegación confusa y no ofrece noticias, recomendaciones ni comunidad. Wegow tiene la capa de comunidad, pero saca al usuario de la app para leer sobre un artista, y su catálogo argentino está casi vacío.`,
              `**竞品基准分析——Spotify、Bandsintown、Wegow。**从三个维度衡量：每项操作所需步骤、设计质量与错误处理。Spotify 把现场演出埋在其他内容之下，没有搜索或筛选，只有推荐。Bandsintown 对阿根廷的覆盖不错，但导航混乱，也没有资讯、推荐或社区。Wegow 有社区层，却会把用户带出应用去了解艺人，而且其阿根廷演出目录几乎是空的。`),
            t(`**Survey, 20 respondents** matching the proto-persona. 70% had missed a concert because they found out too late. 95% prefer going with someone. 50% attend frequently.`,
              `**Encuesta a 20 personas** que coinciden con la proto-persona. El 70 % se perdió un concierto por enterarse demasiado tarde. El 95 % prefiere ir acompañado. El 50 % asiste con frecuencia.`,
              `**问卷调查，20 位**符合初始人物设定的受访者。70% 曾因得知消息太晚而错过演唱会；95% 更愿意结伴前往；50% 经常参加演出。`),
            t(`**Five in-depth interviews.** Every single participant had missed a show. Social media (Twitter, Instagram) was the default discovery channel for all of them. Most wanted more context before committing — venue details, reviews, how to get there.`,
              `**Cinco entrevistas en profundidad.** Todas las personas entrevistadas se habían perdido algún show. Las redes sociales (Twitter, Instagram) eran el canal de descubrimiento por defecto para todas. La mayoría quería más contexto antes de decidir: detalles del lugar, reseñas, cómo llegar.`,
              `**五场深度访谈。**每一位参与者都曾错过演出。社交媒体（Twitter、Instagram）是所有人默认的发现渠道。大多数人在决定前希望获得更多信息：场地详情、评价、交通方式。`),
            t(`**Focus group, 3 participants, testing Wegow.** Unanimous verdict: overwhelming and hard to understand. Attractive design, but poor legibility and no sense of location within the app.`,
              `**Focus group de 3 participantes probando Wegow.** Veredicto unánime: abrumadora y difícil de entender. Diseño atractivo, pero poca legibilidad y ninguna sensación de ubicación dentro de la app.`,
              `**焦点小组，3 位参与者试用 Wegow。**一致结论：信息过载、难以理解。设计吸引人，但可读性差，在应用内也缺乏“身处何处”的方位感。`),
            t(`**Open card sorting, 10 participants, 20 cards** (Optimal Workshop). Chat and community cards clustered tightly; private chat refused to group with the other chat cards; several cards were grouped inconsistently, producing more categories than the product could carry.`,
              `**Card sorting abierto, 10 participantes, 20 tarjetas** (Optimal Workshop). Las tarjetas de chat y comunidad se agruparon con fuerza; el chat privado se negó a agruparse con las demás tarjetas de chat; varias tarjetas se agruparon de forma inconsistente, generando más categorías de las que el producto podía sostener.`,
              `**开放式卡片分类，10 位参与者，20 张卡片**（Optimal Workshop）。聊天与社区类卡片高度聚集；私聊卡片始终不与其他聊天卡片归为一类；若干卡片的归类前后不一致，产生了超出产品承载能力的分类数量。`)
          ],
          outro: [t(
            `**The insight that came out of the interviews:** going to a show is a one-off moment of connection between a crowd and an artist that will not happen again. That reframed the product — it isn’t an events calendar, it’s a way of not missing something unrepeatable.`,
            `**El insight que surgió de las entrevistas:** ir a un show es un momento único de conexión entre un público y un artista que no se va a repetir. Eso redefinió el producto: no es un calendario de eventos, es una forma de no perderse algo irrepetible.`,
            `**访谈中得出的洞察：**去看一场演出，是人群与艺人之间一次不会重来的连接时刻。这让产品的定位发生了转变——它不是一份活动日历，而是一种不错过不可复制时刻的方式。`)]
        },
        { id: 'decisions', title: t(`Key design decisions`, `Decisiones clave de diseño`, `关键设计决策`), decisions: [
          { title: t(`01 · A single place to decide, not just to browse`, `01 · Un solo lugar para decidir, no solo para explorar`, `01 · 一个用来做决定的地方，而不只是浏览`), rows: [
            { label: L.context, text: t(`Deciding whether to go depends on lineup, setlist, price, venue conditions and transport — normally spread across three sites.`, `Decidir si ir depende del lineup, el setlist, el precio, las condiciones del lugar y el transporte, información que normalmente está repartida en tres sitios.`, `是否前往取决于阵容、歌单、票价、场地条件和交通——这些信息通常分散在三个网站上。`) },
            { label: L.decision, text: t(`The event detail carries everything needed to decide.`, `El detalle del evento reúne todo lo necesario para decidir.`, `活动详情页汇集做决定所需的全部信息。`) },
            { label: L.evidence, text: t(`Interviewees explicitly asked for reviews, venue information and transport before committing; Wegow’s habit of ejecting users to external pages was logged as its single major error in the benchmark.`, `Las personas entrevistadas pidieron expresamente reseñas, información del lugar y transporte antes de decidir; que Wegow expulse al usuario a páginas externas quedó registrado como su principal error en el benchmark.`, `受访者明确表示，决定前需要评价、场地信息和交通信息；Wegow 把用户带到外部页面的做法，在基准分析中被记录为其最主要的错误。`) }
          ] },
          { title: t(`02 · Search and filters as equal paths`, `02 · Búsqueda y filtros como caminos equivalentes`, `02 · 搜索与筛选并重`), rows: [
            { label: L.context, text: t(`Filtering by genre and date is the obvious discovery mechanism.`, `Filtrar por género y fecha es el mecanismo de descubrimiento más obvio.`, `按风格和日期筛选是最显而易见的发现方式。`) },
            { label: L.decision, text: t(`Give direct search the same weight.`, `Darle a la búsqueda directa el mismo peso.`, `让直接搜索拥有同等的权重。`) },
            { label: L.evidence, text: t(`Spotify’s lack of any search or filter was its main weakness in the benchmark; two mental models (“show me what’s on” vs “is X playing?”) coexist and only one is served by filters.`, `La ausencia total de búsqueda y filtros fue la principal debilidad de Spotify en el benchmark; conviven dos modelos mentales (“¿qué hay?” frente a “¿toca X?”) y los filtros solo atienden a uno.`, `Spotify 完全没有搜索和筛选，是其在基准分析中最大的弱点；用户心中并存两种心智模型（“看看有什么演出”与“X 有演出吗？”），而筛选只能满足其中一种。`) }
          ] },
          { title: t(`03 · Community over a bare social feed`, `03 · Comunidad en lugar de un feed social vacío`, `03 · 以社区取代空洞的社交动态流`), rows: [
            { label: L.context, text: t(`People almost never attend alone; “who do I go with?” is a real blocker in the journey map.`, `Casi nadie va solo; “¿con quién voy?” es un bloqueo real en el journey map.`, `几乎没有人独自去看演出；“和谁一起去？”是用户旅程图中真实存在的阻碍。`) },
            { label: L.decision, text: t(`Build community around artists and events — public event chats, profile matching by musical taste — rather than a generic social graph.`, `Construir la comunidad alrededor de artistas y eventos (chats públicos por evento, matching de perfiles según gustos musicales) en lugar de un grafo social genérico.`, `围绕艺人和活动构建社区——公开的活动聊天室、基于音乐品味的用户匹配——而不是通用的社交关系网。`) },
            { label: L.evidence, text: t(`The focus group asked for a community chat unprompted; the survey’s 95% figure made it a product requirement, not a nice-to-have.`, `El focus group pidió un chat de comunidad sin que nadie lo sugiriera; el 95 % de la encuesta lo convirtió en un requisito de producto, no en un extra deseable.`, `焦点小组在没有任何引导的情况下主动提出需要社区聊天；问卷中的 95% 让它成为产品的必要需求，而非可有可无的附加项。`) }
          ] },
          { title: t(`04 · Rebuilding the IA after the card sorting failed cleanly`, `04 · Rehacer la arquitectura de información tras un card sorting que no convergió`, `04 · 卡片分类未能收敛后，重建信息架构`), rows: [
            { label: L.context, text: t(`Participants produced too many categories, and several cards didn’t land where I expected.`, `Los participantes generaron demasiadas categorías y varias tarjetas no cayeron donde yo esperaba.`, `参与者生成的分类过多，若干卡片的归类也与我的预期不符。`) },
            { label: L.decision, text: t(`Don’t ship the raw dendrogram. Reformulate into five sections — Descubrir, Comunidad, Mi perfil, Notificaciones, Ajustes.`, `No entregar el dendrograma en bruto. Reformular en cinco secciones: Descubrir, Comunidad, Mi perfil, Notificaciones, Ajustes.`, `不直接采用原始树状图，而是重新整理为五个板块：Descubrir、Comunidad、Mi perfil、Notificaciones、Ajustes。`) },
            { label: L.why, text: t(`A card sorting that doesn’t converge is still a finding. It says the mental model isn’t stable yet, and the designer has to make the call rather than outsource it to the data.`, `Un card sorting que no converge sigue siendo un hallazgo. Dice que el modelo mental todavía no es estable, y que quien diseña tiene que tomar la decisión en lugar de delegarla en los datos.`, `没有收敛的卡片分类本身也是一项发现。它说明用户的心智模型尚不稳定，设计师必须自己做出判断，而不能把决定外包给数据。`) }
          ] }
        ] },
        { id: 'mvp', title: t(`MVP`, `MVP`, `MVP`),
          intro: [t(
            `**Must-haves:** login, concert search with filters, full event information (setlist, lineup, venue conditions), saved events, user connection, account. **Nice-to-haves, explicitly deprioritised:** reviews, artist profiles, artist-based communities, transport info, taste matching.`,
            `**Imprescindibles:** login, búsqueda de conciertos con filtros, información completa del evento (setlist, lineup, condiciones del lugar), eventos guardados, conexión entre usuarios, cuenta. **Deseables, postergados de forma explícita:** reseñas, perfiles de artistas, comunidades por artista, información de transporte, matching por gustos.`,
            `**必备功能：**登录、带筛选的演唱会搜索、完整的活动信息（歌单、阵容、场地条件）、收藏活动、用户连接、账户。**明确降低优先级的加分项：**评价、艺人主页、以艺人为核心的社区、交通信息、品味匹配。`)],
          outro: [t(
            `Cutting is a decision. Connection was rated high priority because the research made it core to the problem, while favourites and profile were rated medium — useful, but only once a user is already invested.`,
            `Recortar es una decisión. La conexión entre usuarios se calificó como prioridad alta porque la investigación la mostró como parte central del problema, mientras que favoritos y perfil se calificaron como media: útiles, pero solo cuando el usuario ya está involucrado.`,
            `取舍本身就是一种决策。用户连接被列为高优先级，因为研究表明它是问题的核心；而收藏和个人资料被列为中优先级——有用，但只有在用户已经投入使用之后才有意义。`)]
        },
        { id: 'didnt-work', title: t(`What didn’t work`, `Lo que no funcionó`, `哪些没有奏效`), items: [
          t(`**The card sorting didn’t converge.** Private chat wouldn’t group with the other chat cards, and participants created more categories than the product could support. My grouping logic and theirs were not the same.`,
            `**El card sorting no convergió.** El chat privado no se agrupaba con las demás tarjetas de chat y los participantes crearon más categorías de las que el producto podía sostener. Mi lógica de agrupación y la de ellos no coincidían.`,
            `**卡片分类没有收敛。**私聊卡片不愿与其他聊天卡片归为一类，参与者创建的分类数量也超出了产品所能承载的范围。我的分组逻辑与他们的并不一致。`),
          t(`**The proto-persona and the survey disagreed on age.** The persona was framed at 18–30; the survey concluded 25–35. Small, but it means the target was moving while the product was being designed.`,
            `**La proto-persona y la encuesta no coincidieron en la edad.** La persona se planteó entre 18 y 30 años; la encuesta concluyó 25–35. Es un detalle menor, pero implica que el público objetivo se fue moviendo mientras se diseñaba el producto.`,
            `**初始人物设定与问卷结果在年龄上不一致。**人物设定为 18–30 岁，问卷结论却是 25–35 岁。差异不大，但意味着在设计产品的过程中，目标人群一直在变化。`)
        ] },
        { id: 'learning', title: S.learning, intro: [t(
          `Users did not follow the mental model I assumed. The card sorting made that concrete rather than theoretical: structure that is coherent from the inside can still be unfindable from the outside, and the only way to find out is to put it in front of people before designing a single screen.`,
          `Las personas usuarias no siguieron el modelo mental que yo había supuesto. El card sorting lo volvió concreto en lugar de teórico: una estructura coherente desde adentro puede ser imposible de encontrar desde afuera, y la única forma de saberlo es ponerla frente a las personas antes de diseñar una sola pantalla.`,
          `用户并没有遵循我所假设的心智模型。卡片分类让这一点变得具体而非停留在理论层面：从内部看逻辑自洽的结构，从外部看仍可能无法被找到，而唯一的验证方式，就是在设计任何一个界面之前先把它交给真实的人。`)] },
        { id: 'if-launched', title: t(`If launched`, `Si se lanzara`, `若产品上线`), intro: [t(
          `Future measurement, not results: discovery rate, search success rate, event-save conversion, ticket conversion, community engagement, 7-day retention.`,
          `Medición futura, no resultados: tasa de descubrimiento, tasa de éxito de búsqueda, conversión a evento guardado, conversión a compra de entradas, engagement de la comunidad y retención a 7 días.`,
          `以下为未来的衡量指标，而非已有结果：发现率、搜索成功率、活动收藏转化率、购票转化率、社区参与度、7 日留存率。`)] }
      ],
      gallery: [],
      cta: [
        { label: t(`View prototype`, `Ver prototipo`, `查看原型`), href: null },
        { label: t(`View full research PDF`, `Ver PDF completo de la investigación`, `查看完整研究 PDF`), href: null }
      ]
    },

    /* ───────────────────────── 02 · DUOLINGO ───────────────────────── */
    '/projects/duolingo': {
      slug: 'duolingo',
      name: `Duolingo — Real Practice`,
      type: 'principal',
      order: 2,
      category: t(`Products`, `Productos`, `产品`),
      hero: {
        tagline: t(`Closing the gap between finishing a lesson and holding a conversation.`,
                   `Cerrar la brecha entre terminar una lección y mantener una conversación.`,
                   `弥合“学完一节课”与“能开口对话”之间的差距。`),
        description: t(
          `A proposed new feature for Duolingo: a section built for the thing gamification alone doesn’t deliver — speaking to an actual person.`,
          `Una nueva funcionalidad propuesta para Duolingo: una sección pensada para lo que la gamificación por sí sola no logra: hablar con una persona real.`,
          `为 Duolingo 提出的一项新功能：一个专为游戏化本身无法实现的目标而设计的板块——与真人开口交流。`),
        meta: t(
          `2025 · Academic project, Universidad del Este (La Plata) · Team of 4 · Concept — not affiliated with Duolingo · Role: UI/UX Design (sole ownership) — research conducted with 3 teammates`,
          `2025 · Proyecto académico, Universidad del Este (La Plata) · Equipo de 4 · Concepto, sin afiliación con Duolingo · Rol: UI/UX Design (responsabilidad individual) — research realizado junto a 3 compañeros`,
          `2025 · 学术项目，Universidad del Este（拉普拉塔）· 4 人团队 · 概念设计——与 Duolingo 无任何关联 · 角色：UI/UX 设计（独立负责）——研究与 3 位队友共同完成`),
        tags: {
          en: [`UX Research (team)`, `Competitive Analysis`, `UX/UI (individual)`, `Prototype (Figma)`],
          es: [`UX Research (equipo)`, `Análisis competitivo`, `UX/UI (individual)`, `Prototipo (Figma)`],
          zh: [`UX 研究（团队）`, `竞品分析`, `UX/UI（个人）`, `原型（Figma）`]
        },
        badges: [
          t(`Academic project`, `Proyecto académico`, `学术项目`),
          t(`Not affiliated with Duolingo`, `Sin afiliación con Duolingo`, `与 Duolingo 无关联`)
        ]
      },
      seo: t(
        `Real Practice: an academic concept for a Duolingo feature that helps learners hold real conversations. Not affiliated with Duolingo.`,
        `Real Practice: concepto académico de una funcionalidad para Duolingo que ayuda a pasar de las lecciones a conversaciones reales. Sin afiliación con Duolingo.`,
        `Real Practice：为 Duolingo 构想的学术概念功能，帮助学习者从完成课程走向真实对话。与 Duolingo 无关联。`),
      sections: [
        { id: 'problem', title: S.problem, intro: [t(
          `Language apps have solved motivation and solved consistency. What they haven’t solved is transfer: learners who complete hundreds of lessons still can’t hold a spontaneous conversation. The gap shows up hardest in speaking and listening in everyday situations, and it’s the difference between studying a language and functioning in it.`,
          `Las apps de idiomas resolvieron la motivación y la constancia. Lo que todavía no resolvieron es la transferencia: personas que completan cientos de lecciones y aun así no pueden sostener una conversación espontánea. La brecha se nota sobre todo al hablar y escuchar en situaciones cotidianas, y es la diferencia entre estudiar un idioma y poder desenvolverse en él.`,
          `语言学习应用已经解决了动力和坚持的问题，但尚未解决的是“迁移”：学习者完成了数百节课，仍然无法进行一场即兴的对话。这一差距在日常情境中的听说环节最为明显，也正是“学习一门语言”与“能用这门语言生活”之间的区别。`)] },
        { id: 'objective', title: S.objective, intro: [t(
          `Complement gamification with experiences that build real conversational ability — practising dialogue, understanding everyday speech, and carrying what happens inside the app into situations outside it.`,
          `Complementar la gamificación con experiencias que desarrollen una capacidad conversacional real: practicar diálogos, entender el habla cotidiana y llevar lo que ocurre dentro de la app a situaciones fuera de ella.`,
          `用能够真正培养对话能力的体验来补充游戏化：练习对话、理解日常口语，并把应用内的所学带入应用之外的真实情境。`)] },
        { id: 'evidence', title: S.evidence,
          intro: [t(
            `**Benchmark of four apps — Busuu, Babbel, Memrise, Falou — on three axes:** navigation (steps per key action), vocabulary and tone (including how each one handles errors), and visual/functional design. What it surfaced:`,
            `**Benchmark de cuatro apps — Busuu, Babbel, Memrise, Falou — en tres ejes:** navegación (pasos por acción clave), vocabulario y tono (incluido cómo maneja cada una los errores) y diseño visual y funcional. Lo que mostró:`,
            `**对四款应用——Busuu、Babbel、Memrise、Falou——进行基准分析，维度有三：**导航（关键操作所需步骤）、词汇与语气（包括各自如何处理错误）、视觉与功能设计。分析发现：`)],
          items: [
            t(`**Busuu** has the strongest differentiator in the category: corrections from native speakers. Users praise it consistently. But the social layer adds steps and can overload the interface.`,
              `**Busuu** tiene el diferencial más fuerte de la categoría: las correcciones de hablantes nativos. Los usuarios la elogian de manera constante. Pero la capa social agrega pasos y puede sobrecargar la interfaz.`,
              `**Busuu** 拥有该品类中最突出的差异化优势：由母语者提供批改。用户对此一致称赞。但其社交层会增加操作步骤，也可能让界面显得过载。`),
            t(`**Babbel** is the most structured and the most professional-looking, and the least motivating. Neutral error handling, no emotional engagement, less appealing to younger users.`,
              `**Babbel** es la más estructurada y la de aspecto más profesional, y también la menos motivadora. Manejo neutro de los errores, sin compromiso emocional, y menos atractiva para el público más joven.`,
              `**Babbel** 结构最清晰、外观最专业，但也是最缺乏激励的一个。错误处理方式中性，缺少情感层面的参与，对年轻用户的吸引力较弱。`),
            t(`**Memrise** wins on playfulness and loses on seriousness — gamification can bury a real mistake.`,
              `**Memrise** gana en espíritu lúdico y pierde en seriedad: la gamificación puede esconder un error real.`,
              `**Memrise** 胜在趣味性，输在严肃性——游戏化可能会掩盖真正的错误。`),
            t(`**Falou** reaches pronunciation practice in a single step. It is the clearest evidence in the benchmark that speaking practice can be the front door of a language app rather than a buried feature.`,
              `**Falou** llega a la práctica de pronunciación en un solo paso. Es la evidencia más clara del benchmark de que la práctica oral puede ser la puerta de entrada de una app de idiomas y no una función enterrada.`,
              `**Falou** 只需一步就能进入发音练习。这是基准分析中最清晰的证据，说明口语练习完全可以成为语言应用的“门面”，而不是一个被深埋的功能。`),
            /* VERIFICAR FUENTE de estas cifras (¿están citadas en el research deck?) antes de publicar */
            t(`**Market context:** the online language-learning market was valued at around $11.52B in 2023, projected to $52.16B by 2032. Duolingo leads with over 620M registered users, ahead of Busuu (120M) and Memrise (65M).`,
              `**Contexto de mercado:** el mercado de aprendizaje de idiomas online se valuó en alrededor de USD 11.520 millones en 2023, con una proyección de USD 52.160 millones para 2032. Duolingo lidera con más de 620 millones de usuarios registrados, por delante de Busuu (120 millones) y Memrise (65 millones).`,
              `**市场背景：**在线语言学习市场 2023 年的规模约为 115.2 亿美元，预计到 2032 年将达到 521.6 亿美元。Duolingo 以超过 6.2 亿注册用户位居第一，领先于 Busuu（1.2 亿）和 Memrise（6500 万）。`),
            t(`**Google Trends (Argentina):** searches concentrate on English, then Italian, with certification exams a recurring theme.`,
              `**Google Trends (Argentina):** las búsquedas se concentran en inglés, luego en italiano, y los exámenes de certificación aparecen como un tema recurrente.`,
              `**Google Trends（阿根廷）：**搜索集中在英语，其次是意大利语，各类认证考试是反复出现的主题。`),
            t(`**Qualitative survey** on how people actually practise, what feedback they find useful, and the emotional barriers — shame and anxiety — that stop them from speaking at all.`,
              `**Encuesta cualitativa** sobre cómo practica la gente en la realidad, qué devoluciones le resultan útiles y cuáles son las barreras emocionales —vergüenza y ansiedad— que les impiden hablar.`,
              `**定性问卷**，了解人们实际如何练习、哪些反馈对他们有用，以及那些让他们根本不敢开口的情感障碍——羞耻与焦虑。`),
            t(`**Three user personas, three different failure modes:** Juan, 38, sales executive — needs English for meetings, blocked by lack of real practice. Martina, 16, preparing a B2 French exam — needs colloquial expressions, not textbook ones. Sofía, 22, communications student — needs academic vocabulary to read papers without translating.`,
              `**Tres personas usuarias, tres tipos de bloqueo:** Juan, 38, ejecutivo de ventas: necesita inglés para sus reuniones y lo frena la falta de práctica real. Martina, 16, se prepara para un examen de francés B2: necesita expresiones coloquiales, no las de los libros de texto. Sofía, 22, estudiante de comunicación: necesita vocabulario académico para leer papers sin traducir.`,
              `**三位用户画像，三种不同的受阻方式：**Juan，38 岁，销售主管——开会需要英语，却因缺乏真实练习而受阻。Martina，16 岁，正在备考法语 B2——需要口语化表达，而不是教科书里的说法。Sofía，22 岁，传播学专业学生——需要学术词汇，以便不借助翻译就能阅读论文。`)
          ]
        },
        { id: 'key-decision', title: t(`The decision that defines the case`, `La decisión que define el caso`, `定义这个项目的决策`),
          intro: [
            t(`**The obvious solution was a video-call feature. We rejected it.**`,
              `**La solución obvia era una función de videollamada. La descartamos.**`,
              `**最显而易见的方案是视频通话功能。我们否决了它。**`),
            t(`**Why:** the research kept surfacing the same barrier — people freeze. Shame, anxiety, no idea what to say. Dropping a beginner into an open video call with a stranger doesn’t remove the barrier, it concentrates it.`,
              `**Por qué:** la investigación hacía aflorar siempre la misma barrera: la gente se paraliza. Vergüenza, ansiedad, no saber qué decir. Meter a un principiante en una videollamada abierta con un desconocido no elimina la barrera, la concentra.`,
              `**原因：**研究反复指向同一个障碍——人们会“僵住”：羞耻、焦虑、不知道说什么。把初学者直接扔进一场与陌生人的开放式视频通话，并不会消除这个障碍，只会让它更加集中。`),
            t(`**What we built instead:** an ecosystem of **gamification + AI + guided social practice**, where the social contact is scaffolded rather than raw.`,
              `**Lo que construimos en su lugar:** un ecosistema de **gamificación + IA + práctica social guiada**, donde el contacto social está acompañado y no es crudo.`,
              `**我们转而构建的是：**一个由**游戏化 + AI + 引导式社交练习**组成的生态，让社交接触是被“搭好脚手架”的，而不是赤裸裸的。`),
            t(`Four features, each aimed at a different moment:`,
              `Cuatro funcionalidades, cada una pensada para un momento distinto:`,
              `四项功能，各自针对不同的时刻：`)
          ],
          items: [
            t(`**Native exchange system** — unlocks at A2/B1+, matches learners with native speakers, with real-time correction. Bidirectional gamification: learners earn XP, native correctors earn redeemable points, badges and premium access. Ratings keep correction quality up.`,
              `**Sistema de intercambio con nativos:** se desbloquea desde A2/B1+, conecta a quienes aprenden con hablantes nativos, con corrección en tiempo real. Gamificación bidireccional: quienes aprenden ganan XP; quienes corrigen ganan puntos canjeables, insignias y acceso premium. Las valoraciones mantienen alta la calidad de las correcciones.`,
              `**母语者交流系统**——从 A2/B1+ 阶段解锁，将学习者与母语者配对，并提供实时纠错。双向游戏化：学习者获得 XP，纠错的母语者获得可兑换的积分、徽章和高级会员权益。评分机制保证纠错质量。`),
            t(`**Contextual keyboard integration** — a non-intrusive suggestion in the target language appears while the user types in WhatsApp, Instagram or X. Per-app toggle. Words seen this way get reinforced later in lessons.`,
              `**Integración con el teclado contextual:** una sugerencia no intrusiva en el idioma que se aprende aparece mientras la persona escribe en WhatsApp, Instagram o X. Se activa o desactiva por app. Las palabras vistas de este modo se refuerzan después en las lecciones.`,
              `**情境键盘集成**——用户在 WhatsApp、Instagram 或 X 中打字时，会出现不打扰的目标语言建议。可按应用单独开关。以这种方式见到的词汇，之后会在课程中得到强化。`),
            t(`**Culture & Slang blog** — short native-speaker videos on regional idioms, current slang and the mistakes learners typically make. Community-generated, curated, upvoted.`,
              `**Blog de cultura y slang:** videos cortos de hablantes nativos sobre modismos regionales, slang actual y los errores típicos de quienes aprenden. Contenido generado por la comunidad, curado y votado.`,
              `**文化与俚语博客**——由母语者拍摄的短视频，讲解地方习语、当下流行的俚语以及学习者常犯的错误。内容由社区创作，经过筛选并由用户点赞。`),
            t(`**Goal-based onboarding** — one question before the course starts (travel, work, exchange, everyday conversation), and from A2 onward lessons prioritise that context.`,
              `**Onboarding por objetivos:** una sola pregunta antes de empezar el curso (viaje, trabajo, intercambio, conversación cotidiana) y, desde A2, las lecciones priorizan ese contexto.`,
              `**以目标为导向的新手引导**——课程开始前只问一个问题（旅行、工作、交换、日常对话），从 A2 起，课程会优先围绕这一情境展开。`)
          ],
          outro: [
            t(`**Second decision worth defending:** native correctors are paid in points, premium access and status — not money. It keeps the exchange inside the gamification system the product already runs on, instead of bolting a marketplace onto a learning app.`,
              `**Segunda decisión que vale la pena defender:** quienes corrigen como nativos reciben puntos, acceso premium y estatus, no dinero. Así el intercambio se mantiene dentro del sistema de gamificación que el producto ya usa, en lugar de agregarle un marketplace a una app de aprendizaje.`,
              `**第二项值得捍卫的决策：**母语纠错者得到的是积分、高级会员权益和身份地位，而不是金钱。这样交流依然留在产品既有的游戏化体系之内，而不是给一款学习应用硬塞进一个交易市场。`),
            t(`**Third:** the new section uses light blue inside Duolingo’s existing design system, on iOS. Deliberate — the feature needed to read as new territory without breaking the brand.`,
              `**Tercera:** la nueva sección usa celeste dentro del sistema de diseño existente de Duolingo, en iOS. Es deliberado: la funcionalidad tenía que leerse como territorio nuevo sin romper la marca.`,
              `**第三：**新板块在 Duolingo 现有设计系统内使用浅蓝色，面向 iOS。这是有意为之——这项功能需要呈现出“新领域”的感觉，同时又不破坏品牌。`)
          ]
        },
        /* PENDIENTE (no incluido): párrafo "Trade-offs" del docx (opinión sobre qué feature iría primero / cuál se recortaría).
           Agregalo solo si lo confirma el equipo. */
        { id: 'measure', title: t(`What we’d measure`, `Qué mediríamos`, `我们将衡量什么`), intro: [t(
          `If built: sessions completed per learner, correction quality ratings, retention of learners who use Real Practice vs those who don’t, and self-reported confidence before and after. Labelled as proposed measurement — nothing here was launched.`,
          `Si se construyera: sesiones completadas por persona, calificaciones de calidad de las correcciones, retención de quienes usan Real Practice frente a quienes no, y confianza autopercibida antes y después. Se presenta como medición propuesta: nada de esto fue lanzado.`,
          `若产品上线，将衡量：每位学习者完成的练习次数、纠错质量评分、使用与未使用 Real Practice 的学习者留存率对比，以及学习者前后自评的信心变化。以上均为拟议的衡量方式——此项目并未上线。`)] }
      ],
      gallery: [],
      cta: [
        { label: t(`View prototype (Figma)`, `Ver prototipo (Figma)`, `查看原型（Figma）`), href: null },
        { label: t(`View full research deck`, `Ver presentación completa de la investigación`, `查看完整研究演示文稿`), href: null }
      ]
    },

    /* ───────────────────────── 03 · CLAUDIA FABIANI ───────────────────────── */
    '/projects/claudia-fabiani': {
      slug: 'claudia-fabiani',
      name: `Claudia Fabiani`,
      type: 'secondary',
      order: 3,
      category: t(`Client work · Branding`, `Trabajo para cliente · Branding`, `客户项目 · 品牌`),
      hero: {
        tagline: t(`A skincare legacy spanning 45+ years, reimagined for the modern beauty market.`,
                   `Un legado en el cuidado de la piel de más de 45 años, reimaginado para el mercado de belleza actual.`,
                   `拥有 45 年以上历史的护肤传承，为现代美容市场重新构想。`),
        description: t(
          `Redesign of her professional website: from outdated WordPress to a premium digital presence showcasing her expertise, portfolio and masterclass offerings to international hotels.`,
          `Rediseño de su sitio profesional: de un WordPress desactualizado a una presencia digital premium que muestra su experiencia, su portfolio y su oferta de masterclasses a hoteles internacionales.`,
          `她的专业网站改版：从过时的 WordPress 站点升级为高端的数字形象，向国际酒店展示她的专业能力、作品集和大师课服务。`),
        meta: t(
          `Client work · Skincare specialist & spa educator · Web Design & Branding`,
          `Trabajo para cliente · Especialista en cuidado de la piel y educadora de spa · Diseño web y branding`,
          `客户项目 · 护肤专家与水疗教育培训师 · 网页设计与品牌`),
        tags: {
          en: [`Web Design`, `Branding`],
          es: [`Diseño web`, `Branding`],
          zh: [`网页设计`, `品牌`]
        },
        badges: []
      },
      seo: t(
        `Claudia Fabiani: website redesign for a skincare specialist and spa educator with 45+ years of experience, from outdated WordPress to a premium web presence.`,
        `Claudia Fabiani: rediseño web para una especialista en cuidado de la piel con más de 45 años de trayectoria, de un WordPress desactualizado a una web premium.`,
        `Claudia Fabiani：为拥有 45 年以上经验的护肤专家与水疗教育培训师重新设计网站，从过时的 WordPress 升级为高端数字形象。`),
      sections: [
        { id: 'problem', title: S.problem, intro: [t(
          `Her previous website was running on outdated WordPress with imagery from 2012. It didn’t reflect her current expertise, accomplishments or the premium services she offers. For a professional with 45+ years in the skincare industry, the digital presence didn’t match the value she delivers.`,
          `Su sitio anterior funcionaba sobre un WordPress desactualizado, con imágenes de 2012. No reflejaba su experiencia actual, sus logros ni los servicios premium que ofrece. Para una profesional con más de 45 años en la industria del cuidado de la piel, la presencia digital no estaba a la altura del valor que entrega.`,
          `她之前的网站运行在过时的 WordPress 上，图片还停留在 2012 年。它既没有体现她当下的专业能力和成就，也没有体现她所提供的高端服务。对于一位在护肤行业深耕 45 年以上的专业人士而言，这样的数字形象与她所创造的价值并不相称。`)] },
        { id: 'objective', title: S.objective, intro: [t(
          `Create a premium online portfolio that showcases her 45+ years of expertise in skincare and spa education. The website needed to attract high-profile clients (international hotels and spas) interested in booking her for masterclasses and consulting work.`,
          `Crear un portfolio online premium que muestre sus más de 45 años de experiencia en cuidado de la piel y educación en spa. El sitio tenía que atraer a clientes de alto perfil (hoteles y spas internacionales) interesados en contratarla para masterclasses y consultoría.`,
          `打造一个高端的在线作品集，展现她在护肤和水疗教育领域 45 年以上的专业经验。网站需要吸引高端客户（国际酒店和水疗中心），让他们愿意邀请她开设大师课并提供咨询服务。`)] },
        { id: 'results', title: t(`Results`, `Resultados`, `成果`), intro: [t(
          `After launch, Claudia received multiple work proposals from international hotels and was confirmed again as an educator at Capella Sydney. The redesigned website directly contributed to these business opportunities — a clear example of how strategic web design drives real results for service-based professionals.`,
          `Tras el lanzamiento, Claudia recibió varias propuestas de trabajo de hoteles internacionales y fue confirmada nuevamente como educadora en Capella Sydney. El sitio rediseñado contribuyó directamente a estas oportunidades de negocio: un ejemplo claro de cómo el diseño web estratégico genera resultados reales para profesionales de servicios.`,
          `上线之后，Claudia 收到了多家国际酒店的合作邀约，并再次被确认担任 Capella Sydney 的培训师。改版后的网站直接促成了这些商业机会——这清楚地说明，策略性的网页设计能为服务型专业人士带来真实的成果。`)] }
      ],
      gallery: [],
      cta: [ { label: t(`View website`, `Ver sitio web`, `查看网站`), href: null } ]
    },

    /* ───────────────────────── 04 · RAUL PARDEILHAN ───────────────────────── */
    '/projects/raul-pardeilhan': {
      slug: 'raul-pardeilhan',
      name: `Raul Pardeilhan`,
      type: 'secondary',
      order: 4,
      category: t(`Client work · Portfolio`, `Trabajo para cliente · Portfolio`, `客户项目 · 作品集`),
      hero: {
        tagline: t(`A premium portfolio for a multidisciplinary artist: model, actor, and musician with 20+ years of international experience.`,
                   `Un portfolio premium para un artista multidisciplinario: modelo, actor y músico con más de 20 años de experiencia internacional.`,
                   `为一位多领域艺术家打造的高端作品集：模特、演员兼音乐人，拥有 20 年以上的国际经验。`),
        description: t(
          `Redesign of his professional portfolio website, consolidating his creative work across modeling, acting, and music into a unified, premium digital presence.`,
          `Rediseño de su sitio de portfolio profesional, que reúne su trabajo creativo en modelaje, actuación y música en una presencia digital unificada y premium.`,
          `他的专业作品集网站改版，将其在模特、表演和音乐领域的创作整合为统一、高端的数字形象。`),
        meta: t(
          `Client work · International model, actor & musician · Portfolio & Art Direction`,
          `Trabajo para cliente · Modelo, actor y músico internacional · Portfolio y dirección de arte`,
          `客户项目 · 国际模特、演员兼音乐人 · 作品集与艺术指导`),
        tags: {
          en: [`Portfolio`, `Art Direction`],
          es: [`Portfolio`, `Dirección de arte`],
          zh: [`作品集`, `艺术指导`]
        },
        badges: []
      },
      seo: t(
        `Raul Pardeilhan: a premium portfolio website for an international model, actor and musician, unifying 20+ years of creative work in one digital presence.`,
        `Raul Pardeilhan: portfolio web premium para un modelo, actor y músico internacional que unifica más de 20 años de trabajo creativo en un solo sitio.`,
        `Raul Pardeilhan：为国际模特、演员兼音乐人打造的高端作品集网站，把 20 多年的创作整合为统一的数字形象。`),
      sections: [
        { id: 'problem', title: S.problem, intro: [t(
          `Raul needed a redesigned portfolio that positioned him as a premium creative professional with 20+ years of experience across modeling, acting, and music in Europe and beyond. His previous portfolio didn’t coherently showcase all facets of his career.`,
          `Raul necesitaba un portfolio rediseñado que lo posicionara como un profesional creativo premium, con más de 20 años de experiencia en modelaje, actuación y música en Europa y más allá. Su portfolio anterior no mostraba de forma coherente todas las facetas de su carrera.`,
          `Raul 需要一个全新的作品集，把他定位为拥有 20 年以上经验的高端创意从业者——他的模特、表演和音乐生涯遍及欧洲及其他地区。他之前的作品集无法连贯地展现其职业生涯的各个侧面。`)] },
        { id: 'objective', title: S.objective, intro: [t(
          `Create a unified, premium digital portfolio that showcases his artistic identity across three disciplines. Establish a clear visual identity that reflects his international professional standing and curate all his albums, music, and visual work in one organized system.`,
          `Crear un portfolio digital unificado y premium que muestre su identidad artística a través de tres disciplinas. Establecer una identidad visual clara que refleje su trayectoria profesional internacional y curar todos sus álbumes, su música y su trabajo visual en un único sistema organizado.`,
          `打造一个统一、高端的数字作品集，展现他横跨三个领域的艺术个性。建立清晰的视觉识别，体现他的国际职业地位，并把他所有的专辑、音乐和视觉作品整理进一个有条理的体系中。`)] },
        { id: 'key-decision', title: S.keyDecision, intro: [t(
          `A key decision was to focus exclusively on his artistic work (modeling, acting, music) and deliberately leave out the business side of his career. This strategic curation made the portfolio cohesive and premium — every element serves his creative identity. The main technical challenge was ensuring the website functioned flawlessly without VPN in regions where access might be restricted.`,
          `Una decisión clave fue centrarse exclusivamente en su trabajo artístico (modelaje, actuación, música) y dejar fuera, de manera deliberada, el lado comercial de su carrera. Esta curaduría estratégica volvió al portfolio cohesivo y premium: cada elemento está al servicio de su identidad creativa. El principal desafío técnico fue asegurar que el sitio funcionara sin fallas y sin VPN en regiones donde el acceso podría estar restringido.`,
          `一项关键决策，是只聚焦于他的艺术作品（模特、表演、音乐），并有意略去其职业生涯中商业运营的一面。这种策略性的取舍让作品集既统一又高端——每一个元素都服务于他的创意个性。主要的技术挑战，是确保网站在访问可能受限的地区无需 VPN 也能完美运行。`)] }
        /* PENDIENTE: no hay párrafo "Learning" en tus fuentes. */
      ],
      gallery: [],
      cta: [ { label: t(`View portfolio`, `Ver portfolio`, `查看作品集`), href: null } ]
    },

    /* ───────────────────────── 05 · FUNIHAO ───────────────────────── */
    '/projects/funihao': {
      slug: 'funihao',
      name: `FuNiHao`,
      type: 'secondary',
      order: 5,
      category: t(`Experiments`, `Experimentos`, `实验`),
      hero: {
        tagline: t(`A Chinese language learning app designed for real progress, not just gamification.`,
                   `Una app para aprender chino pensada para un progreso real, no solo para la gamificación.`,
                   `一款为“真实进步”而非单纯“游戏化”而设计的中文学习应用。`),
        description: t(
          `Personal project combining product concept and UX research: a language app built on the official HSK curriculum, addressing the gap that most learning apps leave behind.`,
          `Proyecto personal que combina concepto de producto e investigación UX: una app de idiomas construida sobre el currículo oficial del HSK, que apunta a la brecha que dejan la mayoría de las apps de aprendizaje.`,
          `一个结合产品概念与用户研究的个人项目：基于官方 HSK 课程体系打造的语言学习应用，旨在弥补大多数学习类应用留下的空白。`),
        /* CONFIRMAR: tu docx dice "sin investigación detrás"; este meta y la descripción dicen "UX Research". */
        meta: t(
          `Concept · Product Exploration · UX Research · Interaction Design`,
          `Concepto · Exploración de producto · UX Research · Diseño de interacción`,
          `概念设计 · 产品探索 · UX 研究 · 交互设计`),
        tags: {
          en: [`Product Exploration`, `UX Research`, `Interaction Design`],
          es: [`Exploración de producto`, `UX Research`, `Diseño de interacción`],
          zh: [`产品探索`, `UX 研究`, `交互设计`]
        },
        badges: []
      },
      seo: t(
        `FuNiHao: a Chinese learning app concept built on the official HSK curriculum, prioritizing real progress over gamification. Product exploration by Marga Studio.`,
        `FuNiHao: concepto de app para aprender chino basada en el currículo oficial del HSK, que prioriza el progreso real por sobre la gamificación.`,
        `FuNiHao：基于官方 HSK 课程体系的中文学习应用概念，强调真实进步而非单纯游戏化。由 Marga Studio 完成产品探索。`),
      sections: [
        { id: 'problem', title: S.problem, intro: [t(
          `Most language apps (Duolingo-style) are designed to keep you engaged, but they don’t prioritize actual language acquisition. They work for motivation, but not for transfer — completing hundreds of lessons doesn’t mean you can hold a conversation. As someone living in China learning Mandarin, I noticed the gap was particularly acute for Chinese learners, where the app-to-real-world jump is steeper than with Romance languages.`,
          `La mayoría de las apps de idiomas (al estilo Duolingo) están diseñadas para mantenerte enganchado, pero no priorizan la adquisición real del idioma. Funcionan para la motivación, pero no para la transferencia: completar cientos de lecciones no significa poder mantener una conversación. Como alguien que vive en China y aprende mandarín, noté que la brecha era especialmente marcada para quienes aprenden chino, donde el salto de la app al mundo real es más pronunciado que con las lenguas romances.`,
          `大多数语言学习应用（Duolingo 式）的设计目标是让你持续使用，却并不优先考虑真正的语言习得。它们能提供动力，却无法带来“迁移”——完成数百节课并不意味着你能进行对话。作为一个生活在中国、正在学习普通话的人，我发现这种差距对中文学习者尤为明显：从应用走向真实世界的跨度，比学习罗曼语族语言时更陡峭。`)] },
        { id: 'objective', title: S.objective, intro: [t(
          `Build a language learning experience grounded in the official HSK (Hanyu Shuiping Kaoshi) curriculum. Instead of gamification for its own sake, use HSK’s structured progression as the foundation. Real progress over perceived engagement.`,
          `Construir una experiencia de aprendizaje de idiomas basada en el currículo oficial del HSK (Hanyu Shuiping Kaoshi). En lugar de gamificación porque sí, usar la progresión estructurada del HSK como base. Progreso real por encima de engagement percibido.`,
          `打造一种以官方 HSK（汉语水平考试）课程体系为基础的语言学习体验。不为游戏化而游戏化，而是以 HSK 的结构化进阶作为基石。真实的进步，胜过表面的活跃度。`)] },
        { id: 'key-decision', title: S.keyDecision, intro: [t(
          `The most important design decision was to prioritize HSK structure over app engagement metrics. Many competitors solve motivation but abandon structure; FuNiHao flips that: the curriculum comes first, and engagement serves the learning goal. This approach aligns the app’s incentives with actual language acquisition rather than just screen time.`,
          `La decisión de diseño más importante fue priorizar la estructura del HSK por encima de las métricas de engagement de la app. Muchos competidores resuelven la motivación pero abandonan la estructura; FuNiHao lo invierte: primero el currículo, y el engagement al servicio del objetivo de aprendizaje. Este enfoque alinea los incentivos de la app con la adquisición real del idioma y no solo con el tiempo de pantalla.`,
          `最重要的设计决策，是把 HSK 的结构置于应用活跃度指标之上。许多竞品解决了动力问题，却放弃了结构；FuNiHao 反其道而行：课程体系优先，活跃度服务于学习目标。这使应用的激励机制与真正的语言习得保持一致，而不只是追求屏幕使用时长。`)] }
      ],
      gallery: [],
      cta: [ { label: t(`View prototype`, `Ver prototipo`, `查看原型`), href: null } ]
    }
  };

  root.MARGA_CASES = CASES;
  if (typeof module !== 'undefined' && module.exports) module.exports = CASES;
})(typeof window !== 'undefined' ? window : globalThis);
