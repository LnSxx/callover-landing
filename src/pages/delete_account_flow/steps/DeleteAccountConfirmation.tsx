import { useState } from "react";
import { API_URL } from "../../../network/api";
import { getApiErrorMessage } from "../../../network/get_api_error_message";
import type { User } from "../../../network/user";

function DeleteAccountConfirmation({
  authenticatedUser,
  onDeleted,
}: {
  authenticatedUser: User;
  onDeleted: () => void;
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAccountDeletion = async () => {
    if (isDeleting) {
      return;
    }

    setIsDeleting(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/account`, {
        method: "DELETE",
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(
          await getApiErrorMessage(
            response,
            "We could not delete your account. Please sign in again and retry.",
          ),
        );
      }

      onDeleted();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "We could not delete your account. Please try again.",
      );
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-start text-left">
      <h1 className="text-left">Delete Account?</h1>

      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
        <span className="font-semibold text-[var(--text)]">
          Signed in as {authenticatedUser.username}
        </span>

        <code className="rounded-md border border-[var(--accent-border)] bg-[var(--accent-bg)] px-2 py-1 font-[var(--mono)] text-sm font-semibold text-[var(--accent)]">
          {authenticatedUser.userId}
        </code>
      </div>

      <div className="max-w-2xl space-y-4 text-left leading-7">
        <p>
          Deleting your account is permanent. Your profile, contacts, sessions,
          notifications and call history will be forever removed.
        </p>
      </div>

      <div className="mt-6 w-full max-w-md rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-left text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200">
        There is no way to restore your data back after deleting.
      </div>

      {error && (
        <div
          className="mt-5 w-full max-w-md rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-left text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
          role="alert"
        >
          {error}
        </div>
      )}

      <div className="mt-6 flex w-full max-w-md flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleAccountDeletion}
          disabled={isDeleting}
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isDeleting ? "Deleting account..." : "Permanently delete account"}
        </button>

        <a
          href="/"
          aria-disabled={isDeleting}
          className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--border)] px-5 py-2.5 font-semibold text-[var(--text-h)] transition-colors hover:bg-[var(--social-bg)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-border)] focus:ring-offset-2"
        >
          Cancel
        </a>
      </div>
    </div>
  );
}

export default DeleteAccountConfirmation;
