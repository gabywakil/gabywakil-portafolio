export default function Footer() {
  return (
    <footer className="foot">
      <div className="foot-row">
        <span>© {new Date().getFullYear()} Gabriella Wakil · GW Studios</span>
        <span className="foot-links">
          <a href="mailto:gabiwakil@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/gabriella-wakil-665a733b5" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://www.instagram.com/gw.studios_" target="_blank" rel="noopener">Instagram</a>
        </span>
      </div>
    </footer>
  );
}
