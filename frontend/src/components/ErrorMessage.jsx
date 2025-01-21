import React from "react";

const ErrorMessage = ({ message, success }) => {
  return (
    <p className={`${!success ? ("text-red-800") : "text-green-900"} font-bold`}>{message}</p>
  )
}

export default ErrorMessage;
