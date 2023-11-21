function Footer() {
  return (
    <footer className="mt-10 flex items-center justify-between font-mono text-xs text-slate-600 antialiased dark:text-white">
      <span>{`${new Date().getFullYear()} Itai Keren`}</span>
      <a className="border-b border-current" href="mailto:i@itaikeren.com">
        Email
      </a>
    </footer>
  );
}

export default Footer;
