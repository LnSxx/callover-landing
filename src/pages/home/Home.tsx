import ReactMarkdown from "react-markdown";
import "../../index.css";
import Layout from "../../layout/Layout";
import home from "../../articles/HOME.md?raw";

export default function Home() {
  return (
    <Layout>
      <article className="legal-document">
        <ReactMarkdown>{home}</ReactMarkdown>
      </article>
    </Layout>
  );
}
