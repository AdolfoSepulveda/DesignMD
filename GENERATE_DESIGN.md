Generar DESIGN.md desde el color brand

Este repositorio incluye un script Node que genera un archivo `DESIGN.generated.md` basado en un color hexadecimal de marca.

Ubicación del script:
- `scripts/generate_design_md.js`

Uso:

```bash
# desde la raíz del proyecto (Guía/)
node scripts/generate_design_md.js --hex 2563EB --out ./files/DESIGN.generated.md

# Para aplicar directamente al repo (styles + DESIGN.md)

node scripts/generate_design_md.js --hex 2563EB --apply-css
```

Opciones:
- `--hex` (o `-h`): Color hexadecimal de 6 caracteres (sin `#`) o con `#`.
- `--out` (o `-o`): Ruta de salida para el archivo generado. Por defecto `./files/DESIGN.generated.md`.

Notas:
- El script no depende de paquetes externos.
- El archivo generado contiene la sección de tokens brand y un bloque `CSS Custom Properties` con las variables `--brand-*` y los tokens semánticos.
- Si quieres que el script reemplace el `DESIGN.md` original, pásale la ruta `--out ./files/DESIGN.md`.
