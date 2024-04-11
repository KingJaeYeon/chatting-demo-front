export type Register = {
  email: string;
  password: string;
  username: string;
  displayName?: string;
};

export type Login = {
  email: string;
  password: string;
};
