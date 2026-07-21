import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import PrivacyPolicyPage from "./pages/privacy_policy/PrivacyPolicyPage.tsx";
import DeleteAccountPage from "./pages/delete_account/DeleteAccountPage.tsx";
import HomePage from "./pages/home/HomePage.tsx";
import DeleteAccountFlowPage from "./pages/delete_account_flow/DeleteAccountFlow.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
        <Route
          path="/delete-account/flow"
          element={<DeleteAccountFlowPage />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
