#!/usr/bin/env python3
"""
Design System Server — Python version
Usage: python3 server.py
Then open http://localhost:3000 in your browser
"""

from http.server import HTTPServer, SimpleHTTPRequestHandler
import json
import os
import sys
from pathlib import Path

class BrandHandler(SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/apply-brand':
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length).decode('utf-8')
            
            try:
                data = json.loads(body)
                palette = data.get('palette', {})
                tokens = data.get('tokens', {})
                
                # Update DESIGN.md
                design_path = os.path.join(os.path.dirname(__file__), 'files', 'DESIGN.md')
                with open(design_path, 'r', encoding='utf-8') as f:
                    existing_md = f.read()
                design_md = self._update_design_md_with_brand(existing_md, tokens, palette)
                with open(design_path, 'w', encoding='utf-8') as f:
                    f.write(design_md)
                
                # Update styles.css
                css_result = self._update_styles_css(palette, tokens)
                
                # Send response
                response = {
                    'ok': True,
                    'md': design_path,
                    'css': css_result
                }
                self._send_json_response(200, response)
            except Exception as e:
                self._send_json_response(400, {'ok': False, 'error': str(e)})
            return
        
        # CORS
        self.send_response(200)
        self.end_headers()

    def do_GET(self):
        # Serve files
        if self.path == '/':
            self.path = '/index.html'
        
        # Security: prevent directory traversal
        file_path = os.path.join(os.path.dirname(__file__), 'files', self.path.lstrip('/'))
        if not os.path.abspath(file_path).startswith(os.path.abspath(os.path.join(os.path.dirname(__file__), 'files'))):
            self.send_error(403, 'Forbidden')
            return
        
        try:
            with open(file_path, 'rb') as f:
                content = f.read()
                # CORS headers
                self.send_response(200)
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
                self.send_header('Access-Control-Allow-Headers', 'Content-Type')
                self.send_header('Content-Type', self._get_content_type(file_path))
                self.end_headers()
                self.wfile.write(content)
        except FileNotFoundError:
            self.send_error(404, 'Not Found')

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def _get_content_type(self, path):
        if path.endswith('.html'):
            return 'text/html'
        elif path.endswith('.css'):
            return 'text/css'
        elif path.endswith('.js'):
            return 'text/javascript'
        elif path.endswith('.json'):
            return 'application/json'
        elif path.endswith('.md'):
            return 'text/markdown'
        return 'text/plain'

    def _send_json_response(self, code, data):
        self.send_response(code)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(json.dumps(data).encode('utf-8'))

    def _build_brand_section(self, tokens, palette):
        steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
        primitives = '\n'.join([f'| `--brand-{s}` | `{palette[str(s)]}` |' for s in steps])
        
        semantic_items = [
            ('--bg-brand', tokens.get('--bg-brand'), 'Fondo brand — botón primario, elementos de acción'),
            ('--bg-brand-light', tokens.get('--bg-brand-light'), 'Fondo brand claro — tarjetas seleccionadas, backgrounds de estados'),
            ('--bg-brand-hover', tokens.get('--bg-brand-hover'), 'Hover de elementos brand'),
            ('--border-brand', tokens.get('--border-brand'), 'Borde brand default — tabs activos, tarjetas seleccionadas'),
            ('--border-brand-hover', tokens.get('--border-brand-hover'), 'Borde brand en hover'),
            ('--border-brand-active', tokens.get('--border-brand-active'), 'Borde brand en estado active/focus'),
            ('--border-brand-strong', tokens.get('--border-brand-strong'), 'Borde brand con énfasis máximo'),
            ('--text-brand', tokens.get('--text-brand'), 'Texto brand — links activos, labels de acción'),
            ('--text-brand-subtle', tokens.get('--text-brand-subtle'), 'Texto brand tenue'),
        ]
        semantic = '\n'.join([f'| `{t}` | `{v}` | {d} |' for t, v, d in semantic_items])
        
        css_vars = '\n'.join([f'  --brand-{s}: {palette[str(s)]};' for s in steps])
        css_vars += '\n' + '\n'.join([f'  {k}: {v};' for k, v in tokens.items() if not k.startswith('--brand-')])
        
        return f"""
---

## Tokens — Color de marca (Brand)

Este bloque se genera a partir del color primario del cliente. Reemplaza los tokens de acción en el proyecto.

### Paleta brand — Primitivos

| Token | Valor |
|-------|-------|
{primitives}

### Semánticos — Brand

Los tokens semánticos brand se usan **únicamente** en elementos de acción o acento: tabs activos, tarjetas seleccionadas, botón primario, bordes de foco interactivo. **No usar en contenedores genéricos, fondos de página ni texto de lectura.**

| Token | Valor | Uso |
|-------|-------|-----|
{semantic}

### CSS — Variables brand

```css
:root {{
{css_vars}
}}
```
"""

    def _update_design_md_with_brand(self, existing_md, tokens, palette):
        brand_section = self._build_brand_section(tokens, palette)
        brand_start_marker = "## Tokens — Color de marca (Brand)"
        brand_end_marker = "---"
        
        start_idx = existing_md.find(brand_start_marker)
        if start_idx == -1:
            return existing_md + "\n" + brand_section
        
        # Encuentra el siguiente "---" después de la sección brand
        next_sep_idx = existing_md.find(brand_end_marker, start_idx + len(brand_start_marker))
        end_idx = len(existing_md) if next_sep_idx == -1 else next_sep_idx
        
        return existing_md[:start_idx] + brand_section + existing_md[end_idx:]

    def _update_styles_css(self, palette, tokens):
        css_path = os.path.join(os.path.dirname(__file__), 'files', 'styles.css')
        if not os.path.exists(css_path):
            css_path = 'styles.css'
        try:
            with open(css_path, 'r', encoding='utf-8') as f:
                css = f.read()
            
            root_start = css.find(':root')
            if root_start == -1:
                return {'ok': False, 'message': ':root block not found'}
            
            brace_open = css.find('{', root_start)
            if brace_open == -1:
                return {'ok': False, 'message': 'Malformed :root block'}
            
            # Find matching closing brace
            depth = 0
            end_idx = -1
            for i in range(brace_open, len(css)):
                if css[i] == '{':
                    depth += 1
                elif css[i] == '}':
                    depth -= 1
                    if depth == 0:
                        end_idx = i
                        break
            
            if end_idx == -1:
                return {'ok': False, 'message': 'Could not locate end of :root block'}
            
            before = css[:brace_open + 1]
            inside = css[brace_open + 1:end_idx]
            after = css[end_idx:]
            
            # Remove existing brand lines
            import re
            cleaned = re.sub(r'\n\s*--brand-\d+:.*;?', '', inside)
            
            sem_keys = ['--bg-brand', '--bg-brand-light', '--bg-brand-hover', '--bg-brand-subtle',
                       '--border-brand', '--border-brand-hover', '--border-brand-active', '--border-brand-strong',
                       '--text-brand', '--text-brand-subtle']
            for k in sem_keys:
                escaped = re.escape(k)
                cleaned = re.sub(rf'\n\s*{escaped}:.*;?', '', cleaned)
            
            # Build insertion block
            steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
            primitives = '\n'.join([f'  --brand-{s}: {palette[str(s)]};' for s in steps])
            
            semantics = '\n'.join([
                f'  --bg-brand: {tokens["--bg-brand"]};',
                f'  --bg-brand-light: {tokens["--bg-brand-light"]};',
                f'  --bg-brand-hover: {tokens["--bg-brand-hover"]};',
                f'  --bg-brand-subtle: {tokens["--bg-brand-subtle"]};',
                f'  --border-brand: {tokens["--border-brand"]};',
                f'  --border-brand-hover: {tokens["--border-brand-hover"]};',
                f'  --border-brand-active: {tokens["--border-brand-active"]};',
                f'  --border-brand-strong: {tokens["--border-brand-strong"]};',
                f'  --text-brand: {tokens["--text-brand"]};',
                f'  --text-brand-subtle: {tokens["--text-brand-subtle"]};'
            ])
            
            new_inside = cleaned.strip() + '\n\n' + primitives + '\n' + semantics + '\n'
            new_css = before + '\n' + new_inside + '\n' + after
            
            with open(css_path, 'w', encoding='utf-8') as f:
                f.write(new_css)
            
            return {'ok': True, 'message': 'styles.css updated'}
        except Exception as e:
            return {'ok': False, 'message': f'Failed to update styles.css: {str(e)}'}

if __name__ == '__main__':
    files_dir = os.path.join(os.path.dirname(__file__), 'files')
    
    port = 3001
    server = HTTPServer(('0.0.0.0', port), BrandHandler)
    
    print(f'\n🚀 Design System server running at http://localhost:{port}\n')
    print(f'Open http://localhost:{port} in your browser.')
    print(f'Files are served from: {files_dir}')
    print('\nPRESS Ctrl+C to stop the server.\n')
    
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print('\n\nServer stopped.')
        sys.exit(0)
