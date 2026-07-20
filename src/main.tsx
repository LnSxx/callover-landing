import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import PrivacyPolicyPage from "./pages/privacy_policy/PrivacyPolicyPage.tsx";
import DeleteAccountPage from "./pages/delete_account/DeleteAccountPage.tsx";
import Home from "./pages/home/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/delete-account" element={<DeleteAccountPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
