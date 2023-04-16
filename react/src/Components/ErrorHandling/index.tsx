/* eslint-disable react/function-component-definition */
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/fetchBaseQuery";
import React from "react";
import styles from './index.module.scss';

interface Props {
  error: FetchBaseQueryError;
  customMessage?: string
}

const ErrorHandling: React.FC<Props> = ({error, customMessage}) => {
  switch(error.status) {
    case 404: 
      return <div>Not found. {customMessage}</div>
    case 500:
      return <div>Internal server error. {customMessage}</div>
    default:
      return <div>General error. {customMessage}</div>
  }
}

export default ErrorHandling