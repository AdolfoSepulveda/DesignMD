Scripts

- `generate_design_md.js` — genera `files/DESIGN.md` (por defecto) a partir de un hex.

Ejemplos:

Generar y guardar en `files/DESIGN.md`:

```bash
node scripts/generate_design_md.js --hex 2563EB
```

Generar y además actualizar `styles.css` con las variables brand:

```bash
node scripts/generate_design_md.js --hex 2563EB --apply-css
```

Para sobrescribir otro archivo:

```bash
node scripts/generate_design_md.js --hex #2563EB --out ./files/DESIGN.generated.md
```
