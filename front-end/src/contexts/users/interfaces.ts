import React, { Dispatch } from "react";
import { SetStateAction } from "react";
import { IUser, LoginData, Userdata } from "@/@types/users.types";

export interface IProviderChildrenProps {
  children: React.ReactNode;
}

export interface authProviderData {
  setToken: Dispatch<SetStateAction<string>>;
  token: string | undefined;
  registerUser: (userData: Userdata) => void;
  loginUser: (loginData: LoginData) => void;
}

export interface IUserRequestContext {
  // user: authProviderData | null;
  // setUser: React.Dispatch<SetStateAction<authProviderData | null>>;
  getUserById: (userId: number) => Promise<Userdata>;
}

export type iAxiosError = {
  status: string;
  message: string;
};

export type IUserRegister = {
  id?: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  error?: string | undefined;
  axiosError: iAxiosError;
};

export type IUserData = {
  id: string;
  name: string;
  email: string;
};

export type IUserLoginForm = {
  email: string;
  password: string;
  axiosErrors?: iAxiosError;
  error?: string | undefined;
};
