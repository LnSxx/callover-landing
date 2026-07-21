export type LoginResponse = {
  user: {
    id: string;
    username: string;
    email?: string | null;
  };
};
