import ServerAPI, { httpType } from "./server";

export const RegisterUser = async (data: {
  username: string;
  email: string;
  password: string;
}) => {
  const res = await ServerAPI({
    endPoint: "/user/createUser.php",
    httpType: httpType.POST,
    data: data,
  });

  return res;
};

export const SignIn = async (data: { email: string; password: string }) => {
  const res = await ServerAPI({
    endPoint: "/user/SignIn.php",
    httpType: httpType.GET,
    data: data,
  });

  return res;
};
