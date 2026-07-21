import "../../index.css";
import ReactMarkdown from "react-markdown";
import privacyPolicy from "../../articles/PRIVACY_POLICY.md?raw";

export default function Home() {
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

      <main className="page-main">
        <article className="legal-document">
          <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
        </article>
      </main>

      <footer className="page-footer">
        <span>© {new Date().getFullYear()} Callover</span>
        <a href="mailto:test@testmail.com">test@testmail.com</a>
      </footer>
    </>
  );
}
