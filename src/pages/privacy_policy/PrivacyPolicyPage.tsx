import ReactMarkdown from "react-markdown";
import Layout from "../../layout/Layout";
import privacyPolicy from "../../articles/PRIVACY_POLICY.md?raw";

function PrivacyPolicyPage() {
  return (
    <Layout>
      <article className="legal-document">
        <ReactMarkdown>{privacyPolicy}</ReactMarkdown>
      </article>
    </Layout>
  );
}

export default PrivacyPolicyPage;
