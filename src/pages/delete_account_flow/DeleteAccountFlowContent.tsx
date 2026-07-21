import { useState } from "react";
import DeleteAccountCompleted from "./steps/DeleteAccountCompleted";
import DeleteAccountSignInForm from "./steps/DeleteAccountSignInForm";
import DeleteAccountConfirmation from "./steps/DeleteAccountConfirmation";
import type { User } from "../../network/user";

type Step = "authentication" | "confirmation" | "completed";

function DeleteAccountFlowContent() {
  const [step, setStep] = useState<Step>("authentication");
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);

  if (step === "completed") {
    return <DeleteAccountCompleted />;
  }

  if (step === "confirmation" && authenticatedUser) {
    return (
      <DeleteAccountConfirmation
        authenticatedUser={authenticatedUser}
        onDeleted={() => setStep("completed")}
      />
    );
  }

  return (
    <DeleteAccountSignInForm
      onAuthenticated={(user) => {
        setAuthenticatedUser(user);
        setStep("confirmation");
      }}
    />
  );
}

export default DeleteAccountFlowContent;
