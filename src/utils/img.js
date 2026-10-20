// Ruta a una imagen dentro de /public/img respetando el "base" de GitHub Pages.
export const img = (path) => `${import.meta.env.BASE_URL}img/${path}`;
