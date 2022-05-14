import React from "react";
import {Button } from 'primereact/button';
import { useAuthenticateMutation } from "Services/Authentication";
import Localize from "Components/Localize/Index";
import { AuthenticationDto } from "Types/Authentication";

export const Index = () => {
  const [login] = useAuthenticateMutation();

  const onLogin = () => {
    const authentication: AuthenticationDto = {
      username: 'admin',
      password: '1q2w3E*',
      returnUrl: 'http://localhost/3000'
    }

    login(authentication);
  }

  return <div>
    <Button onClick={onLogin}>{Localize.Login}</Button>
  </div>
}