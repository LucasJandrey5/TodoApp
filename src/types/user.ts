import { AxiosResponse } from "axios";

export interface user {
  idUser: number;
  username: string;
  email: string;
  password?: string;
  profileImage?: string;
  token?: string;
  signed: boolean;
}

export type UserType = {
  user: user | null;
  SignInWithEmail: (data: { email: string; password: string }) => {
    message: string;
    success: string;
  };
  RegisterWithEmail: (data: {
    username: string;
    email: string;
    password: string;
  }) => { message: string; success: string };
};
