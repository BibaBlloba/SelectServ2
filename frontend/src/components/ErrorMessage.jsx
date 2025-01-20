import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <p className="text-red-800 font-bold">{message}</p>
  )
}

export default ErrorMessage;
