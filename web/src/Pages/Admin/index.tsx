/* eslint-disable react/function-component-definition */
import React, { FC } from "react";
import { useAuth } from "react-oidc-context";
import { Outlet } from "react-router-dom";

interface Props {

}
const Admin: FC<Props> = ({}) => {
  const {isAuthenticated} = useAuth();

  if (!isAuthenticated) return <div>Invalid access</div>

  return <div>
    <div>Welcome to the Admin Module</div>
    <Outlet />
    </div>
}


export default Admin;