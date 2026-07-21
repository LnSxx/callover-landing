import { useState, type SubmitEvent } from "react";
import { API_URL } from "../../../network/api";
import { getApiErrorMessage } from "../../../network/get_api_error_message";
import type { LoginResponse } from "../../../network/responses/login.response";
import type { User } from "../../../network/user";

function DeleteAccountSignInForm({
  onAuthenticated,
}: {
  onAuthenticated: (user: User) => void;
}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAuthentication = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedUsername = username.trim();

    if (!normalizedUsername || !password) {
      setError("Enter your username and password.");
      return;
    }

    setIsAuthenticating(true);
    setError(null);

    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: normalizedUsername,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error(
          await getApiErrorMessage(
            response,
            "We could not sign you in. Check your username and password.",
          ),
        );
      }

      const data = (await response.json()) as LoginResponse;

      setPassword("");
      setError(null);
      onAuthenticated({
        username: data.user.username,
        userId: data.user.id,
      });
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "We could not sign you in. Please try again.",
      );
    } finally {
      setIsAuthenticating(false);
    }
  };

  return (
    <div className="flex w-full flex-col items-start text-left">
      <h1 className="text-left">Sign in to delete your account</h1>

      <p className="text-left">Account deletion</p>

      <p className="text-left pb-4">
        Sign in with your Callover username and password. Signing in does not
        delete your account. You will see a separate confirmation step before
        deletion.
      </p>

      <form
        onSubmit={handleAuthentication}
        className="flex w-full max-w-md flex-col gap-5 text-left"
      >
        <div className="w-full text-left">
          <label
            htmlFor="username"
            className="mb-2 block text-sm font-semibold text-[var(--text-h)]"
          >
            Username
          </label>

          <input
            id="username"
            name="username"
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              setError(null);
            }}
            autoComplete="username"
            autoCapitalize="none"
            spellCheck={false}
            disabled={isAuthenticating}
            required
            className="block w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-left text-[var(--text-h)] outline-none transition placeholder:text-[var(--text)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-bg)] disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        <div className="w-full text-left">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-semibold text-[var(--text-h)]"
          >
            Password
          </label>

          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError(null);
            }}
            autoComplete="current-password"
            disabled={isAuthenticating}
            required
            className="block w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-left text-[var(--text-h)] outline-none transition placeholder:text-[var(--text)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-bg)] disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>

        {error && (
          <div
            className="w-full rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-left text-sm text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-200"
            role="alert"
          >
            {error}
          </div>
        )}

        <button
          type="submit"
          disabled={isAuthenticating}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-2.5 font-semibold text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent-border)] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isAuthenticating ? "Signing in..." : "Continue"}
        </button>
      </form>
    </div>
  );
}

export default DeleteAccountSignInForm;
