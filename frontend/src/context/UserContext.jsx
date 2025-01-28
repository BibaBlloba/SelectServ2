import React, { Children, createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("UserToken"))
  const [email, setEmail] = useState(localStorage.getItem("UserEmail"))
  const [isSuper, setIsSuper] = useState(false)

  useEffect(() => {
    const fetchUser = async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        }
      }
      const response = await fetch("http://localhost:8000/users/me", requestOptions)
      const data = await response.json()
      setEmail(data.email)
      if (!response.ok) {
        setEmail(null);
        setToken(null);
      }
      localStorage.setItem("UserToken", token)
      localStorage.setItem("UserEmail", email)
      if (data.is_superuser) {
        setIsSuper(true)
      }
    }
    fetchUser();

  }, [token, email, isSuper])

  return (
    <UserContext.Provider value={[token, setToken, isSuper]}>
      {props.children}
    </UserContext.Provider>
  )
}
