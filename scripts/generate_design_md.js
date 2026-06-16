#!/usr/bin/env node
// Generate a DESIGN.md file based on a brand hex color.
// Usage: node scripts/generate_design_md.js --hex 2563EB --out ./files/DESIGN.generated.md

const fs = require('fs');
const path = require('path');

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c+c).join('');
  const n = parseInt(hex, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function rgbToHex(r,g,b){
  return '#' + [r,g,b].map(v=>Math.round(Math.max(0,Math.min(255,v))).toString(16).padStart(2,'0')).join('');
}
function rgbToHsl(r,g,b){ r/=255; g/=255; b/=255; const max=Math.max(r,g,b), min=Math.min(r,g,b); let h,s,l=(max+min)/2; if(max===min){h=s=0;} else {const d=max-min; s=l>0.5?d/(2-max-min):d/(max+min); switch(max){case r: h=((g-b)/d + (g<b?6:0))/6; break; case g: h=((b-r)/d + 2)/6; break; case b: h=((r-g)/d + 4)/6; break;} } return {h: h*360, s: s*100, l: l*100}; }
function hslToRgb(h,s,l){ h/=360; s/=100; l/=100; let r,g,b; if(s===0){r=g=b=l;} else { const hue2rgb=(p,q,t)=>{ if(t<0) t+=1; if(t>1) t-=1; if(t<1/6) return p + (q-p)*6*t; if(t<1/2) return q; if(t<2/3) return p + (q-p)*(2/3 - t)*6; return p; }; const q = l < 0.5 ? l * (1 + s) : l + s - l * s; const p = 2 * l - q; r=hue2rgb(p,q,h+1/3); g=hue2rgb(p,q,h); b=hue2rgb(p,q,h-1/3);} return {r: r*255, g: g*255, b: b*255}; }
function luminance(r,g,b){ const srgb=[r,g,b].map(v=>{ v/=255; return v<=0.03928 ? v/12.92 : Math.pow((v+0.055)/1.055,2.4);}); return 0.2126*srgb[0] + 0.7152*srgb[1] + 0.0722*srgb[2]; }
function contrastRatio(hex1, hex2){ const c1=hexToRgb(hex1), c2=hexToRgb(hex2); const l1=luminance(c1.r,c1.g,c1.b); const l2=luminance(c2.r,c2.g,c2.b); const lighter=Math.max(l1,l2), darker=Math.min(l1,l2); return (lighter + 0.05) / (darker + 0.05); }

function generatePalette(hex){ const {r,g,b} = hexToRgb(hex); const {h,s} = rgbToHsl(r,g,b); const steps = {50:{l:97,s:Math.min(s*0.3,30)},100:{l:94,s:Math.min(s*0.4,45)},200:{l:87,s:Math.min(s*0.5,55)},300:{l:76,s:Math.min(s*0.65,65)},400:{l:63,s:Math.min(s*0.8,75)},500:{l:52,s:Math.min(s*0.9,85)},600:{l:43,s:Math.min(s*0.95,90)},700:{l:34,s:Math.min(s,92)},800:{l:25,s:Math.min(s*0.95,88)},900:{l:17,s:Math.min(s*0.85,80)},950:{l:10,s:Math.min(s*0.75,70)}}; const palette = {}; for(const [step,{l:lv,s:sv}] of Object.entries(steps)){ const rgb = hslToRgb(h, sv, lv); palette[step] = rgbToHex(rgb.r, rgb.g, rgb.b); } const inputHsl = rgbToHsl(r,g,b); let closestStep=500, minDiff=Infinity; for(const [step,{l:lv}] of Object.entries(steps)){ const diff = Math.abs(lv - inputHsl.l); if(diff < minDiff){ minDiff = diff; closestStep = parseInt(step); } } palette[closestStep] = hex.startsWith('#') ? hex : '#' + hex; return palette; }

function buildBrandTokens(palette, baseStep){ return {
  '--brand-50': palette[50], '--brand-100': palette[100], '--brand-200': palette[200], '--brand-300': palette[300], '--brand-400': palette[400], '--brand-500': palette[500], '--brand-600': palette[600], '--brand-700': palette[700], '--brand-800': palette[800], '--brand-900': palette[900], '--brand-950': palette[950],
  '--bg-brand': palette[baseStep], '--bg-brand-light': palette[50], '--bg-brand-hover': palette[100], '--bg-brand-subtle': palette[100], '--border-brand': palette[200], '--border-brand-hover': palette[300], '--border-brand-active': palette[400], '--border-brand-strong': palette[baseStep], '--text-brand': palette[baseStep], '--text-brand-subtle': palette[400]
}; }

function buildBrandMdSection(tokens, palette){ const steps=[50,100,200,300,400,500,600,700,800,900,950]; const primitives = steps.map(s=>`| \`--brand-${s}\` | \`${palette[s]}\` |`).join('\n'); const semantic = [ ['--bg-brand', tokens['--bg-brand'], 'Fondo brand — botón primario, elementos de acción'], ['--bg-brand-light', tokens['--bg-brand-light'], 'Fondo brand claro — tarjetas seleccionadas, backgrounds de estados'], ['--bg-brand-hover', tokens['--bg-brand-hover'], 'Hover de elementos brand'], ['--border-brand', tokens['--border-brand'], 'Borde brand default — tabs activos, tarjetas seleccionadas'], ['--border-brand-hover', tokens['--border-brand-hover'], 'Borde brand en hover'], ['--border-brand-active', tokens['--border-brand-active'], 'Borde brand en estado active/focus'], ['--border-brand-strong', tokens['--border-brand-strong'], 'Borde brand con énfasis máximo'], ['--text-brand', tokens['--text-brand'], 'Texto brand — links activos, labels de acción'], ['--text-brand-subtle', tokens['--text-brand-subtle'], 'Texto brand tenue'] ].map(([t,v,d])=>`| \`${t}\` | \`${v}\` | ${d} |`).join('\n'); const cssVars = steps.map(s=>`  --brand-${s}: ${palette[s]};`).join('\n') + '\n' + Object.entries(tokens).filter(([k])=>!k.startsWith('--brand-')).map(([k,v])=>`  ${k}: ${v};`).join('\n'); return `\n---\n\n## Tokens — Color de marca (Brand)\n\nEste bloque se genera a partir del color primario del cliente. Reemplaza los tokens de acción en el proyecto.\n\n### Paleta brand — Primitivos\n\n| Token | Valor |\n|-------|-------|\n${primitives}\n\n### Semánticos — Brand\n\nLos tokens semánticos brand se usan **únicamente** en elementos de acción o acento: tabs activos, tarjetas seleccionadas, botón primario, bordes de foco interactivo. **No usar en contenedores genéricos, fondos de página ni texto de lectura.**\n\n| Token | Valor | Uso |\n|-------|-------|-----|\n${semantic}\n\n### CSS — Variables brand\n\n\`\`\`css\n:root {\n${cssVars}\n}\n\`\`\`\n`; }

function buildFullDesignMd(baseHex){ if(!/^#?[0-9A-Fa-f]{6}$/.test(baseHex)) throw new Error('Hex inválido'); const hex = baseHex.startsWith('#')? baseHex : '#'+baseHex; const palette = generatePalette(hex); const baseStep = [500,600,700,800,900,950].find(s=>contrastRatio(palette[s],'#FFFFFF')>=4.5) || 950; const tokens = buildBrandTokens(palette, baseStep); // Minimal header + tokens + existing CSS block placeholder
const header = `# Design System — DESIGN.md\n> Generado automáticamente a partir del color brand ${hex}\n\n`;
const core = `<!-- Generated by scripts/generate_design_md.js -->\n` + buildBrandMdSection(tokens,palette) + `\n## CSS Custom Properties\n\n\` + '```css\n:root {\n  /* Copia el resto de tus custom properties aquí si las necesitas */\n}\n```\n';
return header + core; }

// CLI (simple parser - no external deps)
const rawArgs = process.argv.slice(2);
const argv = {};
for (let i = 0; i < rawArgs.length; i++) {
  const a = rawArgs[i];
  if (a.startsWith('--')) {
    const key = a.slice(2);
    const val = rawArgs[i+1] && !rawArgs[i+1].startsWith('-') ? rawArgs[++i] : true;
    argv[key] = val;
  } else if (a.startsWith('-')) {
    const key = a.slice(1);
    const val = rawArgs[i+1] && !rawArgs[i+1].startsWith('-') ? rawArgs[++i] : true;
    argv[key] = val;
  }
}
const hex = argv.hex || argv.h || '2563EB';
const out = argv.out || argv.o || path.join(__dirname, '..', 'files', 'DESIGN.md');
const applyCss = argv['apply-css'] || argv.applyCss || argv['apply-css'] === true || argv.applyCss === true;
try{
  const content = buildFullDesignMd(hex);
  fs.writeFileSync(out, content, 'utf8');
  console.log('DESIGN.md generado en:', out);

  // recompute palette/tokens to use when applying to styles.css
  const palette = generatePalette(hex);
  const baseStep = [500,600,700,800,900,950].find(s=>contrastRatio(palette[s],'#FFFFFF')>=4.5) || 950;
  const tokens = buildBrandTokens(palette, baseStep);

  if (applyCss) {
    const cssPath = path.join(__dirname, '..', 'files', 'styles.css');
    try {
      let css = fs.readFileSync(cssPath, 'utf8');
      // find :root block
      const rootStart = css.indexOf(':root');
      if (rootStart === -1) throw new Error(':root block not found in styles.css');
      const braceOpen = css.indexOf('{', rootStart);
      if (braceOpen === -1) throw new Error('Malformed :root block');
      // find matching closing brace for :root
      let depth = 0; let endIdx = -1;
      for (let i = braceOpen; i < css.length; i++) {
        if (css[i] === '{') depth++;
        else if (css[i] === '}') { depth--; if (depth === 0) { endIdx = i; break; } }
      }
      if (endIdx === -1) throw new Error('Could not locate end of :root block');
      const before = css.slice(0, braceOpen+1);
      const inside = css.slice(braceOpen+1, endIdx);
      const after = css.slice(endIdx);
      // remove existing brand primitive and semantic lines
      let cleaned = inside.replace(/\n\s*--brand-\d+:.*;?/g, '');
      const semkeys = ['--bg-brand','--bg-brand-light','--bg-brand-hover','--bg-brand-subtle','--border-brand','--border-brand-hover','--border-brand-active','--border-brand-strong','--text-brand','--text-brand-subtle'];
      semkeys.forEach(k => { const re = new RegExp('\\n\\s*' + k.replace(/[-/\\^$*+?.()|[\]{}]/g,'\\$&') + ':.*;?', 'g'); cleaned = cleaned.replace(re, ''); });

      // build insertion block
      const steps = [50,100,200,300,400,500,600,700,800,900,950];
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
      console.log('styles.css actualizado con tokens brand');
    } catch(e) { console.error('No se pudo actualizar styles.css:', e.message); }
  }

} catch(e){ console.error('Error:', e.message); process.exit(1); }
