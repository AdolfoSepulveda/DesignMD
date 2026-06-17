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
| `--brand-50` | `#f5f7f9` |
| `--brand-100` | `#ebeef5` |
| `--brand-200` | `#d0d9ec` |
| `--brand-300` | `#a1b5e3` |
| `--brand-400` | `#6289df` |
| `--brand-500` | `#2563EB` |
| `--brand-600` | `#174dc4` |
| `--brand-700` | `#0f3c9f` |
| `--brand-800` | `#0d2d72` |
| `--brand-900` | `#0d204a` |
| `--brand-950` | `#0a1429` |

### Semánticos — Brand

Los tokens semánticos brand se usan **únicamente** en elementos de acción o acento: tabs activos, tarjetas seleccionadas, botón primario, bordes de foco interactivo. **No usar en contenedores genéricos, fondos de página ni texto de lectura.**

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg-brand` | `#2563EB` | Fondo brand — botón primario, elementos de acción |
| `--bg-brand-light` | `#f5f7f9` | Fondo brand claro — tarjetas seleccionadas, backgrounds de estados |
| `--bg-brand-hover` | `#ebeef5` | Hover de elementos brand |
| `--border-brand` | `#d0d9ec` | Borde brand default — tabs activos, tarjetas seleccionadas |
| `--border-brand-hover` | `#a1b5e3` | Borde brand en hover |
| `--border-brand-active` | `#6289df` | Borde brand en estado active/focus |
| `--border-brand-strong` | `#2563EB` | Borde brand con énfasis máximo |
| `--text-brand` | `#2563EB` | Texto brand — links activos, labels de acción |
| `--text-brand-subtle` | `#6289df` | Texto brand tenue |

### CSS — Variables brand

```css
:root {
  --brand-50: #f5f7f9;
  --brand-100: #ebeef5;
  --brand-200: #d0d9ec;
  --brand-300: #a1b5e3;
  --brand-400: #6289df;
  --brand-500: #2563EB;
  --brand-600: #174dc4;
  --brand-700: #0f3c9f;
  --brand-800: #0d2d72;
  --brand-900: #0d204a;
  --brand-950: #0a1429;
  --bg-brand: #2563EB;
  --bg-brand-light: #f5f7f9;
  --bg-brand-hover: #ebeef5;
  --bg-brand-subtle: #ebeef5;
  --border-brand: #d0d9ec;
  --border-brand-hover: #a1b5e3;
  --border-brand-active: #6289df;
  --border-brand-strong: #2563EB;
  --text-brand: #2563EB;
  --text-brand-subtle: #6289df;
  --button-primary: #2563EB;
  --button-primary-hover: #174dc4;
  --button-primary-pressed: #0f3c9f;
  --button-primary-disabled-bg: #F1F5F9;
  --button-primary-disabled-text: #CBD5E1;
}
```
