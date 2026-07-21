import type { ApiErrorResponse } from "./responses/api_error.response";

export async function getApiErrorMessage(
  response: Response,
  fallback: string,
): Promise<string> {
  try {
    const body = (await response.json()) as ApiErrorResponse;

    if (Array.isArray(body.message)) {
      return body.message.join(" ");
    }

    if (typeof body.message === "string" && body.message.trim()) {
      return body.message;
    }

    const validationMessage = body.errors
      ?.map((error) => error.message)
      .filter(Boolean)
      .join(" ");

    return validationMessage || fallback;
  } catch {
    return fallback;
  }
}
