import React, { Children, createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("UserToken"))
  const [email, setEmail] = useState(localStorage.getItem("UserEmail"))
  const [user_id, setUser_id] = useState(null)
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
      const response = await fetch("/api/users/me", requestOptions)
      const data = await response.json()
      setEmail(data.email)
      setUser_id(data.id)
      if (!response.ok) {
        setEmail(null);
        setToken(null);
      }
      localStorage.setItem("UserToken", token)
      localStorage.setItem("UserEmail", email)
      if (data.is_superuser) {
        setIsSuper(true)
      }
      console.log(data)
    }
    fetchUser();

  }, [token, email, isSuper, user_id])

  return (
    <UserContext.Provider value={[token, setToken, isSuper, user_id, email]}>
      {props.children}
    </UserContext.Provider>
  )
}
