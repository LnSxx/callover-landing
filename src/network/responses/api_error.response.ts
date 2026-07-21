export type ApiErrorResponse = {
  message?: string | string[];
  errors?: Array<{
    field?: string;
    message?: string;
  }>;
};
