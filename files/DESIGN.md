# Design System — DESIGN.md
> Guía de referencia para herramientas de IA y agentes de código

**Tema:** claro (light mode)
**Fuente principal:** Figtree
**Plataformas:** Web (desktop + mobile)
**Stack:** HTML + CSS puro (sin frameworks). Variables CSS en `:root`.

Este archivo define los tokens, componentes y reglas de decisión del Design System. Cualquier pantalla, componente o modificación generada por IA debe respetar estrictamente estos valores. No se deben introducir colores, tamaños de texto, espaciados ni border-radius fuera de los definidos aquí.


---

## Tokens — Colores

El sistema usa dos capas de color: **primitivos** (la paleta base) y **semánticos** (tokens con propósito). En los componentes, usar siempre los tokens semánticos. Los primitivos solo existen para construir los semánticos y no deben usarse directamente.

### Semánticos — Background

| Token | Valor | Primitivo | Uso |
|-------|-------|-----------|-----|
| `--bg-body` | `#FFFFFF` | blanco | Fondo base de la página |
| `--bg-surface` | `#F8FAFC` | gris-50 | Tarjetas, paneles, tablas, contenedores elevados |
| `--bg-hover` | `#F1F5F9` | gris-100 | Estado hover de filas, ítems de lista, elementos interactivos |
| `--bg-presionado` | `#E2E8F0` | gris-200 | Estado active/pressed de elementos interactivos |
| `--bg-deshabilitado` | `#F1F5F9` | gris-100 | Fondo de campos y botones en estado disabled |
| `--bg-accion` | `#475569` | gris-600 | Fondos de acciones secundarias específicas |
| `--bg-brand` | `#55812c` | gris-950 | Botón primario, elementos de marca |
| `--bg-exito` | `#F0FDF5` | exito-50 | Fondo de alertas y badges de éxito |
| `--bg-error` | `#FEF2F2` | error-50 | Fondo de alertas y mensajes de error |
| `--bg-alerta` | `#FEF9E8` | alerta-50 | Fondo de alertas de advertencia |
| `--bg-info` | `#EFF5FF` | info-50 | Fondo de alertas informativas |
| `--bg-modal` | `rgba(2, 6, 23, 0.70)` | — | Overlay de modales |

### Semánticos — Texto

| Token | Valor | Primitivo | Uso |
|-------|-------|-----------|-----|
| `--text-default` | `#334155` | gris-700 | Texto principal del contenido |
| `--text-subtle` | `#64748B` | gris-500 | Labels, descripciones, metadatos, placeholders |
| `--text-strong` | `#020617` | gris-950 | Títulos, énfasis máximo |
| `--text-disabled` | `#CBD5E1` | gris-300 | Texto en estados deshabilitados |
| `--text-onColor` | `#FFFFFF` | blanco | Texto sobre fondos oscuros o de color |
| `--text-info` | `#3B82F6` | info-500 | Texto de estado informativo |
| `--text-exito` | `#16A34A` | exito-600 | Texto de estado de éxito |
| `--text-error` | `#DC2626` | error-600 | Texto de estado de error, mensajes de validación |
| `--text-alerta` | `#CA9A04` | alerta-600 | Texto de advertencia |

### Semánticos — Bordes

| Token | Valor | Primitivo | Uso |
|-------|-------|-----------|-----|
| `--border-default` | `#E2E8F0` | gris-200 | Borde estándar de componentes en estado default |
| `--border-strong` | `#475569` | gris-600 | Borde con énfasis visual |
| `--border-active` | `#334155` | gris-700 | Borde en estado active/focus de inputs |
| `--border-focus` | `#94A3B8` | gris-400 | Sombra de foco en inputs |
| `--border-deshabilitado` | `#F1F5F9` | gris-100 | Borde en estado disabled |
| `--border-info` | `#3B82F6` | info-500 | Borde informativo |
| `--border-exito` | `#22C55E` | exito-500 | Borde de éxito |
| `--border-error` | `#DC2626` | error-600 | Borde de error en inputs y componentes |
| `--border-alerta` | `#EAB308` | alerta-500 | Borde de advertencia |

### Semánticos — Botones (específicos)

| Token | Valor | Uso |
|-------|-------|-----|
| `--button-error` | `#DC2626` | Fondo de botón destructivo/error |
| `--button-excel` | `#166533` | Fondo de botón Excel (exportar) |

### Primitivos — Grises

| Token | Valor |
|-------|-------|
| `--gris-50` | `#F8FAFC` |
| `--gris-100` | `#F1F5F9` |
| `--gris-200` | `#E2E8F0` |
| `--gris-300` | `#CBD5E1` |
| `--gris-400` | `#94A3B8` |
| `--gris-500` | `#64748B` |
| `--gris-600` | `#475569` |
| `--gris-700` | `#334155` |
| `--gris-800` | `#1E293B` |
| `--gris-900` | `#0F172A` |
| `--gris-950` | `#020617` |

### Primitivos — Estados

| Token | Valor |
|-------|-------|
| `--exito-50` | `#F0FDF5` |
| `--exito-500` | `#22C55E` |
| `--exito-600` | `#16A34A` |
| `--error-50` | `#FEF2F2` |
| `--error-500` | `#EF4444` |
| `--error-600` | `#DC2626` |
| `--alerta-50` | `#FEF9E8` |
| `--alerta-500` | `#EAB308` |
| `--alerta-600` | `#CA9A04` |
| `--info-50` | `#EFF5FF` |
| `--info-500` | `#3B82F6` |

---


---


---


---


---


---


---


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
-------|-------|
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
-------|-------|
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
-------|-------|
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
-------|-------|
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
-------|-------|
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
-------|-------|
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
-------|-------|
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

---

## Tokens — Tipografía

**Fuente:** Figtree — importar desde Google Fonts.
**Nunca usar otra fuente.** No se permiten tamaños intermedios ni pesos distintos a los definidos.

```html
<link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;600&display=swap" rel="stylesheet" />
```

### Escala tipográfica

| Nombre | Tamaño | Peso | Line-height | Uso |
|--------|--------|------|-------------|-----|
| display-48 | 48px | 600 | 57px | Títulos de hero, páginas de inicio |
| display-40 | 40px | 600 | 48px | Títulos de sección impactante |
| heading-1 | 32px | 600 | 40px | Título principal de página |
| heading-2 | 28px | 600 | 32px | Título de sección |
| heading-3 | 24px | 600 | 28px | Subtítulo de sección |
| heading-4 | 20px | 600 | 24px | Título de tarjeta o panel |
| body | 16px | 400 | 20px | Texto principal del contenido |
| body-strong | 16px | 600 | 20px | Texto principal con énfasis |
| small | 14px | 400 | 18px | Labels, descripciones, textos secundarios |
| small-strong | 14px | 600 | 18px | Labels con énfasis, texto de botones md/lg |
| extra-small | 12px | 400 | 16px | Metadatos, badges, texto de ayuda |
| extra-small-strong | 12px | 600 | 16px | Texto de botones sm, etiquetas de estado |

### Reglas de uso tipográfico

- **Todo el texto va alineado a la izquierda**, sin excepciones. La única excepción son números en tablas (derecha) y cantidades monetarias (derecha).
- Los Headings van siempre acompañados de texto `small` como descripción. Nunca `body`.
- La separación entre un Heading y su descripción es `--spacing-none` (0px).
- No usar `text-align: center` en párrafos ni cuerpos de texto.
- Capitalización: **Sentence case** por defecto. Title Case solo en títulos de 3 palabras o menos.
- Truncamiento en tablas: máximo 2 líneas. En tarjetas: máximo 3 líneas.

---

## Tokens — Espaciado

**Unidad base:** 4px. Todo espaciado es múltiplo de 4.
Usar siempre un token. Nunca valores arbitrarios como `10px`, `15px`, `22px`.

| Token | Valor | Uso típico |
|-------|-------|------------|
| `--spacing-none` | `0px` | Agrupación visual compacta (título + descripción) |
| `--spacing-xxs` | `4px` | Gap interno en botones sm, íconos con texto |
| `--spacing-xs` | `8px` | Gap en botones md/lg, separación mínima entre elementos |
| `--spacing-sm` | `12px` | Padding de botones md, separación entre ítems de lista |
| `--spacing-md` | `16px` | Padding general de contenedores, separación entre campos de formulario |
| `--spacing-lg` | `20px` | Padding de botones lg, separación entre grupos de elementos |
| `--spacing-xl` | `24px` | Separación entre secciones dentro de una tarjeta |
| `--spacing-2xl` | `32px` | Separación entre bloques de contenido en página |
| `--spacing-3xl` | `40px` | Separación entre secciones grandes |
| `--spacing-4xl` | `48px` | Márgenes de layout, padding de página |
| `--spacing-5xl` | `64px` | Separación máxima entre secciones de página |

---

## Tokens — Forma y Elevación

### Border radius

Un único valor de border-radius en todo el sistema: **8px** (`--radius-base`).
No usar 4px, 12px, 16px ni border-radius: 9999px salvo que el componente lo especifique.

### Sombras

| Token | Valor | Uso |
|-------|-------|-----|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.05)` | Hover de inputs y componentes interactivos |
| `--shadow-md` | `0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.04)` | Tarjetas, paneles elevados |
| `--shadow-lg` | `0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04)` | Modales, dropdowns |

---

## Tokens — Border Radius

El sistema define una escala progresiva de radios de esquina vinculada a tokens de diseño. Cada token corresponde a un contexto de uso específico y no debe intercambiarse arbitrariamente. Nunca usar valores numéricos directamente — siempre referenciar el token correspondiente.

### Escala

| Token | Valor | Uso |
|-------|-------|-----|
| `--radius-none` | `0px` | Tablas, separadores, líneas divisoras, imágenes a sangre, elementos que deben fusionarse con el borde del contenedor padre |
| `--radius-xs` | `4px` | Tags, badges de estado, chips de filtro, tooltips, popovers, inputs cuando forman parte de un formulario estándar |
| `--radius-sm` | `8px` | Botones primarios, secundarios y de texto (regla sin excepción), chips de selección, etiquetas de acción |
| `--radius-md` | `12px` | Tarjetas (cards), modales, paneles, cards de contenido, componentes principales de la interfaz |
| `--radius-lg` | `16px` | Cards destacadas, drawers laterales (esquinas superiores), ventanas emergentes, componentes que requieren mayor suavidad |
| `--radius-xl` | `24px` | Hero cards, banners, secciones de bienvenida, elementos de marketing destacados |
| `--radius-full` | `999px` | Pills, avatares, badges circulares, toggles, icon buttons, elementos visualmente circulares o semicirculares |

### Border radius por componente

- **Botones:** siempre `--radius-sm` (8px) sin excepción. Los icon buttons son la única excepción: usar `--radius-full` (999px).
- **Inputs y selects:** `--radius-xs` (4px) cuando forman parte de un formulario estándar.
- **Tarjetas (cards):** `--radius-md` (12px).
- **Modales y drawers:** `--radius-lg` (16px) en esquinas superiores.
- **Tooltips y popovers:** `--radius-xs` (4px).
- **Avatares:** siempre `--radius-full` (999px).
- **Skeleton loaders:** replicar exactamente el border radius del componente que reemplazan.

### Regla de anidamiento

Cuando un elemento con border radius contiene otro elemento con border radius, el valor del hijo debe ser menor que el del padre: radius_hijo = radius_padre − padding_contenedor

Si el resultado es negativo o cero, los elementos internos no llevan border radius. Ejemplo: una card con `--radius-md` (12px) y `padding: 16px` — los elementos internos no deben llevar border radius.

**Excepción de imágenes dentro de contenedores redondeados:**
- Imagen en esquina superior: `--radius-md` en esquinas superiores, `--radius-none` en las inferiores.
- Imagen de fondo completa: mismo radius del contenedor en todas las esquinas.
- Prohibido aplicar border radius directamente a imágenes que no estén dentro de un contenedor redondeado.

### Relación padding–radius

A mayor padding interno, mayor debe ser el border radius para mantener la proporción visual.

| Tamaño de componente | Padding | Radius |
|----------------------|---------|--------|
| Pequeño (sm) | `--spacing-xs` (8px) | `--radius-xs` (4px) |
| Mediano (md) | `--spacing-sm` (12px) | `--radius-sm` (8px) |
| Grande (lg+) | `--spacing-md` (16px) o más | `--radius-md` (12px) o más |

No usar `--radius-full` en componentes con padding mayor a `--spacing-md`, ya que genera una proporción visual inconsistente con el resto del sistema.

### CSS Custom Properties

```css
:root {
  --radius-none: 0px;
  --radius-xs:   4px;
  --radius-sm:   8px;
  --radius-md:   12px;
  --radius-lg:   16px;
  --radius-xl:   24px;
  --radius-full: 999px;
}
```

---

## Componentes

### Botones

#### Variantes

| Variante | Fondo | Texto | Borde | Uso |
|----------|-------|-------|-------|-----|
| Primario | `--bg-brand` (#020617) | `--text-onColor` (#fff) | ninguno | Acción principal. Máximo 1 por vista. |
| Secundario | `--bg-body` (#fff) | `--text-default` (#334155) | `1px solid --border-default` | Acciones de apoyo o cancelación. |
| Link | transparente | `--text-default` | ninguno | Acciones terciarias, navegación contextual. |
| Error / Destructivo | `--button-error` (#DC2626) | `--text-onColor` (#fff) | ninguno | Acciones irreversibles: eliminar, deshabilitar. |
| Excel | `--button-excel` (#166533) | `--text-onColor` (#fff) | ninguno | Exclusivo para exportar a Excel. |

#### Tamaños

| Tamaño | Font-size | Padding vertical | Padding horizontal | Gap |
|--------|-----------|------------------|--------------------|-----|
| sm | 12px | `--spacing-xxs` (4px) | `--spacing-xs` (8px) | `--spacing-xxs` (4px) |
| md | 14px | `--spacing-sm` (12px) | `--spacing-md` (16px) | `--spacing-xs` (8px) |
| lg | 16px | `--spacing-md` (16px) | `--spacing-lg` (20px) | `--spacing-xs` (8px) |

Border-radius: 8px en todos los tamaños y variantes.

#### Estados

- **Primario** — Hover: brightness(1.15). Active: brightness(0.88). Disabled: opacity 0.5.
- **Secundario** — Hover: `--bg-hover` + `--shadow-sm`. Active: `--bg-presionado`. Disabled: opacity 0.5.
- **Error** — Hover: brightness(1.1). Active: brightness(0.88). Disabled: opacity 0.5.
- **Excel** — Hover: brightness(1.1). Active: brightness(0.88). Disabled: opacity 0.5.

#### Reglas de jerarquía

- Máximo 1 botón Primario por vista.
- Cancelar siempre es Secundario, nunca Destructivo.
- El botón Destructivo requiere confirmación antes de ejecutar.
- El botón Excel se usa únicamente para exportar a Excel.

---

### Inputs de texto

#### Anatomía

- **Label:** small-strong (14px/600), `--text-default`. Obligatorio: incluir asterisco (*).
- **Placeholder:** small (14px/400), `--text-subtle`.
- **Texto ingresado:** small (14px/400), `--text-default`.
- **Texto de ayuda:** extra-small (12px/400), `--text-subtle`. Bajo el campo.
- **Fondo:** `--bg-body`. **Borde:** `1px solid --border-default`, border-radius 8px.

#### Estados

| Estado | Fondo | Borde | Sombra |
|--------|-------|-------|--------|
| Default | `--bg-body` | `--border-default` | ninguna |
| Hover | `--bg-body` | `--border-default` (sin cambio) | `--shadow-sm` |
| Active | `--bg-body` | `--border-active` (#334155) | ninguna |
| Filled | `--bg-body` | `--border-default` | ninguna |
| Error | `--bg-body` | `--border-error` (#DC2626) | ninguna |
| Disabled | `--bg-deshabilitado` | `--border-deshabilitado` | ninguna |

---

### Buscador

Sin label. Ícono de lupa a la izquierda. En estado default: sin borde visible (única excepción). No tiene estado disabled.

---

## Reglas generales de composición

### Color
- Nunca hardcodear valores. Usar siempre el token semántico.
- Los tokens de estado deben usarse en conjunto: `--bg-error` + `--border-error` + `--text-error`.

### Tipografía
- Solo los tamaños de la escala. Solo Figtree. Solo pesos 400 o 600.
- Todo texto alineado a la izquierda, excepto números en tablas.

### Espaciado
- Todo margin, padding y gap usa un token de espaciado.
- Separación entre título y descripción: `--spacing-none`.
- Separación entre campos de formulario: `--spacing-md` (16px).
- Padding interno de tarjeta: `--spacing-xl` (24px).

### Señales de alerta

| Patrón incorrecto | Corrección |
|-------------------|------------|
| `color: #334155` hardcodeado | Usar `var(--text-default)` |
| `font-size: 15px` | Solo tamaños de la escala (14px o 16px) |
| `margin: 10px` | Usar `var(--spacing-xs)` o `var(--spacing-sm)` |
| `font-family: Arial` | Solo Figtree |
| `border-radius: 4px` o `16px` | Solo 8px |
| `text-align: center` en párrafos | Siempre a la izquierda |
| `font-weight: 500` o `700` | Solo 400 o 600 |

---

## CSS Custom Properties

```css
:root {
  --gris-50: #F8FAFC; --gris-100: #F1F5F9; --gris-200: #E2E8F0;
  --gris-300: #CBD5E1; --gris-400: #94A3B8; --gris-500: #64748B;
  --gris-600: #475569; --gris-700: #334155; --gris-800: #1E293B;
  --gris-900: #0F172A; --gris-950: #020617;
  --exito-50: #F0FDF5; --exito-500: #22C55E; --exito-600: #16A34A;
  --error-50: #FEF2F2; --error-500: #EF4444; --error-600: #DC2626;
  --alerta-50: #FEF9E8; --alerta-500: #EAB308; --alerta-600: #CA9A04;
  --info-50: #EFF5FF; --info-500: #3B82F6;
}
```
