import { NavLink } from "react-router";
import Logo from "../assets/logo.svg?react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="page-header">
        <div className="flex items-center">
          <Logo className="size-8" />

          <NavLink className="brand" to="/" aria-label="Callover home">
            Callover
          </NavLink>
        </div>

        <nav className="page-nav" aria-label="Legal pages">
          <NavLink to="/privacy">Privacy Policy</NavLink>

          <NavLink to="/delete-account">Delete Account</NavLink>
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
