import React, { Children, createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("UserToken"))
  const [email, setEmail] = useState(localStorage.getItem("UserEmail"))

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      }
      const response = await fetch("/api/users/me", requestOptions)
      const data = await response.json()
      setEmail(data.email)
      if (!response.ok) {
        setEmail(null);
        setToken(null);
      }
      localStorage.setItem("UserToken", token)
      localStorage.setItem("UserEmail", email)
    }
    fetchUser();

  }, [token, email])

  return (
    <UserContext.Provider value={[token, setToken]}>
      {props.children}
    </UserContext.Provider>
  )
}
