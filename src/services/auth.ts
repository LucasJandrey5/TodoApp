import ServerAPI, { httpType } from "./server";

export const RegisterUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = await ServerAPI({
    endPoint: "/user/createUser.php",
    http: httpType.POST,
    data: data,
  });

  return res;
};

export const SignIn = async (data: { email: string; password: string }) => {
  const res = await ServerAPI({
    endPoint: "/user/login.php",
    http: httpType.GET,
    data: data,
  });

  return res;
};
