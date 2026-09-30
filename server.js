import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';

// Aliases for initial Framer template links to real projects
const templateSlugRedirects = {
  'ostro-coffee': 'tribuxmusic',
  'ovenbird-bakery': 'duolingo',
  'contrada': 'duolingo',
  'solene': 'funihao',
  'plump-soda': 'claudia-fabiani',
  'dusk-chocolate': 'raul-pardeilhan',
};

// Route for project pages
app.get('/projects/:slug', (req, res, next) => {
  const slug = req.params.slug;

  if (templateSlugRedirects[slug]) {
    return res.redirect(301, `/projects/${templateSlugRedirects[slug]}`);
  }

  // Exact file without extension (e.g. projects/duolingo)
  const projectFilePath = path.join(__dirname, 'projects', slug);
  if (fs.existsSync(projectFilePath) && fs.statSync(projectFilePath).isFile()) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.sendFile(projectFilePath);
  }

  // With .html extension if requested
  const projectHtmlPath = path.join(__dirname, 'projects', `${slug}.html`);
  if (fs.existsSync(projectHtmlPath) && fs.statSync(projectHtmlPath).isFile()) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.sendFile(projectHtmlPath);
  }

  next();
});

// Avoid accidental double nested /projects/projects/slug
app.get('/projects/projects/:slug', (req, res) => {
  res.redirect(301, `/projects/${req.params.slug}`);
});

// Route for /projects and /projects/
app.get(['/projects', '/projects/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'projects', 'index.html'));
});

// Relative assets when accessed from /projects/
app.use('/projects/images', express.static(path.join(__dirname, 'images')));
app.use('/projects/js', express.static(path.join(__dirname, 'js')));
app.get('/projects/marga-content.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'marga-content.js'));
});
app.get(['/projects/about', '/projects/about.html'], (req, res) => {
  res.redirect(301, '/about');
});

// Route for /about and /about.html
app.get(['/about', '/about.html'], (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

// Static assets serving
app.use(express.static(__dirname, {
  extensions: ['html'],
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.framercms')) {
      res.setHeader('Content-Type', 'application/octet-stream');
    } else if (filePath.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    }
  }
}));

// Route for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 Fallback
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at http://${HOST}:${PORT}`);
});
