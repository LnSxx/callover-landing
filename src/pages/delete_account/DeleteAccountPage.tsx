import ReactMarkdown from "react-markdown";
import Layout from "../../layout/Layout";
import privacyPolicy from "../../articles/DELETE_ACCOUNT.md?raw";

function DeleteAccountPage() {
  return (
    <Layout>
      <article className="legal-document">
        <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
      </article>
    </Layout>
  );
}

export default DeleteAccountPage;
