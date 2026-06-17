#!/usr/bin/env node
// Development server with file write endpoint
// Usage: node server.js (from Guía/ directory)
// Then open http://localhost:3000 in your browser

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const filesDir = path.join(__dirname, 'files');
const port = process.env.PORT || 3001;

function buildBrandMdSection(tokens, palette) {
  const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
  const primitives = steps.map(s => `| \`--brand-${s}\` | \`${palette[s]}\` |`).join('\n');
  const semantic = [
    ['--bg-brand', tokens['--bg-brand'], 'Fondo brand — botón primario, elementos de acción'],
    ['--bg-brand-light', tokens['--bg-brand-light'], 'Fondo brand claro — tarjetas seleccionadas, backgrounds de estados'],
    ['--bg-brand-hover', tokens['--bg-brand-hover'], 'Hover de elementos brand'],
    ['--border-brand', tokens['--border-brand'], 'Borde brand default — tabs activos, tarjetas seleccionadas'],
    ['--border-brand-hover', tokens['--border-brand-hover'], 'Borde brand en hover'],
    ['--border-brand-active', tokens['--border-brand-active'], 'Borde brand en estado active/focus'],
    ['--border-brand-strong', tokens['--border-brand-strong'], 'Borde brand con énfasis máximo'],
    ['--text-brand', tokens['--text-brand'], 'Texto brand — links activos, labels de acción'],
    ['--text-brand-subtle', tokens['--text-brand-subtle'], 'Texto brand tenue']
  ].map(([t, v, d]) => `| \`${t}\` | \`${v}\` | ${d} |`).join('\n');

  const cssVars = steps.map(s => `  --brand-${s}: ${palette[s]};`).join('\n') + '\n' +
    Object.entries(tokens)
      .filter(([k]) => !k.startsWith('--brand-'))
      .map(([k, v]) => `  ${k}: ${v};`).join('\n');

  return `
---

## Tokens — Color de marca (Brand)

Este bloque se genera a partir del color primario del cliente. Reemplaza los tokens de acción en el proyecto.

### Paleta brand — Primitivos

| Token | Valor |
|-------|-------|
${primitives}

### Semánticos — Brand

Los tokens semánticos brand se usan **únicamente** en elementos de acción o acento: tabs activos, tarjetas seleccionadas, botón primario, bordes de foco interactivo. **No usar en contenedores genéricos, fondos de página ni texto de lectura.**

| Token | Valor | Uso |
|-------|-------|-----|
${semantic}

### CSS — Variables brand

\`\`\`css
:root {
${cssVars}
}
\`\`\`
`;
}

function updateDesignMdWithBrand(existingMd, tokens, palette) {
  const brandSection = buildBrandMdSection(tokens, palette);
  // Reemplaza la sección "## Tokens — Color de marca (Brand)"
  const brandStartMarker = "## Tokens — Color de marca (Brand)";
  const brandEndMarker = "---"; // Busca el siguiente separador --- después de la sección brand
  const startIndex = existingMd.indexOf(brandStartMarker);
  if (startIndex === -1) {
    return existingMd + "\n" + brandSection;
  }
  // Busca el siguiente --- después de la sección
  const nextSeparatorIndex = existingMd.indexOf(brandEndMarker, startIndex + brandStartMarker.length);
  const endIndex = nextSeparatorIndex === -1 ? existingMd.length : nextSeparatorIndex;
  return existingMd.substring(0, startIndex) + brandSection + existingMd.substring(endIndex);
}

function updateStylesCss(palette, tokens) {
  const cssPath = path.join(filesDir, 'styles.css');
  try {
    let css = fs.readFileSync(cssPath, 'utf8');
    
    // find :root block
    const rootStart = css.indexOf(':root');
    if (rootStart === -1) throw new Error(':root block not found');
    
    const braceOpen = css.indexOf('{', rootStart);
    if (braceOpen === -1) throw new Error('Malformed :root block');
    
    // find matching closing brace
    let depth = 0, endIdx = -1;
    for (let i = braceOpen; i < css.length; i++) {
      if (css[i] === '{') depth++;
      else if (css[i] === '}') { depth--; if (depth === 0) { endIdx = i; break; } }
    }
    if (endIdx === -1) throw new Error('Could not locate end of :root block');
    
    const before = css.slice(0, braceOpen + 1);
    const inside = css.slice(braceOpen + 1, endIdx);
    const after = css.slice(endIdx);
    
    // remove existing brand lines
    let cleaned = inside.replace(/\n\s*--brand-\d+:.*;?/g, '');
    const semkeys = ['--bg-brand', '--bg-brand-light', '--bg-brand-hover', '--bg-brand-subtle', '--border-brand', '--border-brand-hover', '--border-brand-active', '--border-brand-strong', '--text-brand', '--text-brand-subtle'];
    semkeys.forEach(k => {
      const re = new RegExp('\\n\\s*' + k.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + ':.*;?', 'g');
      cleaned = cleaned.replace(re, '');
    });
    
    // build insertion block
    const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
    const primitives = steps.map(s => `  --brand-${s}: ${palette[s]};`).join('\n');
    const semantics = [
      `  --bg-brand: ${tokens['--bg-brand']};`,
      `  --bg-brand-light: ${tokens['--bg-brand-light']};`,
      `  --bg-brand-hover: ${tokens['--bg-brand-hover']};`,
      `  --bg-brand-subtle: ${tokens['--bg-brand-subtle']};`,
      `  --border-brand: ${tokens['--border-brand']};`,
      `  --border-brand-hover: ${tokens['--border-brand-hover']};`,
      `  --border-brand-active: ${tokens['--border-brand-active']};`,
      `  --border-brand-strong: ${tokens['--border-brand-strong']};`,
      `  --text-brand: ${tokens['--text-brand']};`,
      `  --text-brand-subtle: ${tokens['--text-brand-subtle']};`
    ].join('\n');
    
    const newInside = cleaned.trim() + '\n\n' + primitives + '\n' + semantics + '\n';
    const newCss = before + '\n' + newInside + '\n' + after;
    
    fs.writeFileSync(cssPath, newCss, 'utf8');
    return { ok: true, message: 'styles.css updated' };
  } catch (e) {
    return { ok: false, message: 'Failed to update styles.css: ' + e.message };
  }
}

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }

  // POST /api/apply-brand
  if (req.method === 'POST' && req.url === '/api/apply-brand') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const { palette, tokens } = JSON.parse(body);
        
        // Update DESIGN.md
        const mdPath = path.join(filesDir, 'DESIGN.md');
        let existingMd = fs.readFileSync(mdPath, 'utf8');
        const mdContent = updateDesignMdWithBrand(existingMd, tokens, palette);
        fs.writeFileSync(mdPath, mdContent, 'utf8');
        
        // Update styles.css
        const cssResult = updateStylesCss(palette, tokens);
        
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          ok: true,
          md: mdPath,
          css: cssResult
        }));
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ ok: false, error: e.message }));
      }
    });
    return;
  }

  // GET / or any static file
  let filePath = req.url === '/' ? '/index.html' : req.url;
  filePath = path.join(filesDir, filePath);
  
  // security: prevent directory traversal
  if (!filePath.startsWith(filesDir)) {
    res.writeHead(403);
    res.end('Forbidden');
    return;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }

    let contentType = 'text/plain';
    if (filePath.endsWith('.html')) contentType = 'text/html';
    else if (filePath.endsWith('.css')) contentType = 'text/css';
    else if (filePath.endsWith('.js')) contentType = 'text/javascript';
    else if (filePath.endsWith('.json')) contentType = 'application/json';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  });
});

server.listen(port, () => {
  console.log(`\n🚀 Design System server running at http://localhost:${port}\n`);
  console.log('Open http://localhost:' + port + ' in your browser.');
  console.log('Files are served from:', filesDir);
  console.log('\nPRESS Ctrl+C to stop the server.\n');
});
