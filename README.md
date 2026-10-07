# Portafolio · Gabriella Wakil (React + Vite)

    npm install
    npm run dev       # desarrollo
    npm run build     # genera /dist
    npm run deploy    # publica en GitHub Pages

## Estructura
- `src/pages/` → Home y NotFound (rutas en `App.jsx`)
- `src/components/Layout.jsx` → menú + contenido + footer
- `src/components/sections/` → una sección por archivo; `projects/` → un proyecto por archivo
- `src/components/ui/` → `Ph` (marco de imagen) y `Sticker`
- `src/styles/styles.css` → todo el diseño

## Poner tus imágenes
Copia la foto a `public/img/` y en el componente cambia `src=""`:

    <Ph label="CAPTURA: home de Tepuy Race" src="/gabywakil-portafolio/img/tepuy-home.jpg" alt="Home de Tepuy Race" />

Si cambias el nombre del repo, edita `base` en `vite.config.js`.
