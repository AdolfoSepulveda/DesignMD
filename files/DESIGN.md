# Design System — DESIGN.md
> Guía de referencia para herramientas de IA y agentes de código

**Tema:** claro (light mode)
**Fuente principal:** Figtree
**Plataformas:** Web (desktop + mobile)
**Stack:** HTML + CSS puro (sin frameworks). Variables CSS en `:root`.

Este archivo define los tokens, componentes y reglas de decisión del Design System. Cualquier pantalla, componente o modificación generada por IA debe respetar estrictamente estos valores. No se deben introducir colores, tamaños de texto, espaciados ni border-radius fuera de los definidos aquí.


---

## Tokens — Color de marca (Brand)

Este bloque se genera a partir del color primario del cliente. Reemplaza los tokens de acción en el proyecto.

### Paleta brand — Primitivos

| Token | Valor |
|-------|-------|
| `--brand-50` | `#f7f8f6` |
| `--brand-100` | `#f0f3ed` |
| `--brand-200` | `#dde6d6` |
| `--brand-300` | `#c1d5ae` |
| `--brand-400` | `#9fc67b` |
| `--brand-500` | `#82bb4e` |
| `--brand-600` | `#669C35` |
| `--brand-700` | `#55812c` |
| `--brand-800` | `#3e5e22` |
| `--brand-900` | `#2a3e19` |
| `--brand-950` | `#192310` |

### Semánticos — Brand

Los tokens semánticos brand se usan **únicamente** en elementos de acción o acento: tabs activos, tarjetas seleccionadas, botón primario, bordes de foco interactivo. **No usar en contenedores genéricos, fondos de página ni texto de lectura.**

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-brand` | `#55812c` | Fondo brand — botón primario, elementos de acción |
| `--bg-brand-light` | `#f7f8f6` | Fondo brand claro — tarjetas seleccionadas, backgrounds de estados |
| `--bg-brand-hover` | `#f0f3ed` | Hover de elementos brand |
| `--border-brand` | `#dde6d6` | Borde brand default — tabs activos, tarjetas seleccionadas |
| `--border-brand-hover` | `#c1d5ae` | Borde brand en hover |
| `--border-brand-active` | `#9fc67b` | Borde brand en estado active/focus |
| `--border-brand-strong` | `#55812c` | Borde brand con énfasis máximo |
| `--text-brand` | `#55812c` | Texto brand — links activos, labels de acción |
| `--text-brand-subtle` | `#9fc67b` | Texto brand tenue |

### CSS — Variables brand

```css
:root {
  --brand-50: #f7f8f6;
  --brand-100: #f0f3ed;
  --brand-200: #dde6d6;
  --brand-300: #c1d5ae;
  --brand-400: #9fc67b;
  --brand-500: #82bb4e;
  --brand-600: #669C35;
  --brand-700: #55812c;
  --brand-800: #3e5e22;
  --brand-900: #2a3e19;
  --brand-950: #192310;
  --bg-brand: #55812c;
  --bg-brand-light: #f7f8f6;
  --bg-brand-hover: #f0f3ed;
  --bg-brand-subtle: #f0f3ed;
  --border-brand: #dde6d6;
  --border-brand-hover: #c1d5ae;
  --border-brand-active: #9fc67b;
  --border-brand-strong: #55812c;
  --text-brand: #55812c;
  --text-brand-subtle: #9fc67b;
}
```
