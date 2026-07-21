function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="page-header">
        <a className="brand" href="/" aria-label="Callover home">
          Callover
        </a>

        <nav className="page-nav" aria-label="Legal pages">
          <a href="/privacy" aria-current="page">
            Privacy Policy
          </a>

          <a href="/delete-account">Delete Account</a>
        </nav>
      </header>

      <main className="page-main">{children}</main>

      <footer className="page-footer">
        <span>© {new Date().getFullYear()} Callover</span>
        <a href="mailto:callovercommunications@gmail.com">
          callovercommunications@gmail.com
        </a>
      </footer>
    </>
  );
}

export default Layout;
