# Design System — Guía de uso

## Inicio rápido

El proyecto incluye un servidor Node.js que sirve la página y permite guardar los tokens brand generados directamente en los archivos del proyecto.

### 1. Instala Node.js (si no lo tienes)

Descarga desde [nodejs.org](https://nodejs.org)

### 2. Inicia el servidor

Desde la carpeta `Guía/`:

```bash
# Con Node.js directamente
node server.js

# O usando npm (si prefieres)
npm start
```

Verás:
```
🚀 Design System server running at http://localhost:3000

Open http://localhost:3000 in your browser.
Files are served from: /ruta/a/Guía/files

PRESS Ctrl+C to stop the server.
```

### 3. Abre el navegador

Ve a http://localhost:3000

### 4. Genera y aplica colores

1. Elige un color en el picker de **Brand Color** o escribe un hex.
2. Presiona **Generar paleta**.
3. Vé el resultado: paleta, tokens y contrast.
4. Presiona **Aplicar** (botón al final).
5. Los archivos `files/DESIGN.md` y `files/styles.css` se actualizarán automáticamente.

## ¿Qué pasa al presionar Aplicar?

- Se genera un nuevo `DESIGN.md` con la sección de tokens brand.
- Se insertan las variables CSS en `styles.css` (dentro del bloque `:root`):
  - Primitivas: `--brand-50` a `--brand-950`
  - Semánticas: `--bg-brand`, `--border-brand`, `--text-brand`, etc.
- La página se actualiza en vivo para reflejar los cambios.

## Scripts alternativos (CLI)

Si prefieres generar desde línea de comandos:

```bash
# Generar DESIGN.md
node scripts/generate_design_md.js --hex 2563EB

# Generar y actualizar styles.css también
node scripts/generate_design_md.js --hex 2563EB --apply-css
```

## Notas

- El servidor corre en `localhost:3000` por defecto. Puedes cambiar el puerto con `PORT=8080 node server.js`.
- Si hay error al guardar, revisa permisos en la carpeta `files/`.
- Los cambios se guardan en disco, no en memoria. Son persistentes.
