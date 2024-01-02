import { View, Text } from "react-native";
import React, { useState } from "react";
import { UserType, user } from "../types/user";
import { SignIn, RegisterUser } from "../services/auth";

export const UserContext = React.createContext<UserType | null>(null);

const UserProvider = ({ children }: { children: React.JSX.Element }) => {
  const [user, setUser] = useState<user | null>(null);

  const SignInWithEmail = async (data: { email: string; password: string }) => {
    const res = await SignIn(data);
    return res;
  };

  const RegisterWithEmail = async (data: {
    username: string;
    email: string;
    password: string;
  }) => {
    const res = await RegisterUser(data);
    return res;
  };

  return (
    <UserContext.Provider value={{ user, SignInWithEmail, RegisterWithEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
