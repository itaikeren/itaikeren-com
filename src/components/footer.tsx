function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-line pt-5 font-mono text-xs text-muted">
      <span className="text-faint">&copy; {new Date().getFullYear()}</span>
      <a href="mailto:itai@keren.me" className="group inline-flex items-center hover:text-ink">
        <span className="border-b border-transparent group-hover:border-accent">itai@keren.me</span>
      </a>
    </footer>
  );
}

export default Footer;
