/* eslint-disable react/function-component-definition */
import React from "react";
import { useAuth } from "react-oidc-context";
import { Outlet } from "react-router-dom";

const Admin: React.FC = () => {
  const {isAuthenticated} = useAuth();

  if (!isAuthenticated) return <div>Invalid access</div>

  return <div>
    <div>Welcome to the Admin Module</div>
    <Outlet />
    </div>
}


export default Admin;