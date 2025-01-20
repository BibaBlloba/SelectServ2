import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'

const Table = () => {

  const [token] = useContext(UserContext)
  const [leads, setLeads] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [activeModel, setActiveModel] = useState(false)
  const [id, setId] = useState(null)

  const getLeads = async () => {
    const requestOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer" + token,
      },
    }
    const response = await fetch("http://localhost:8000/leads", requestOptions)
    const data = await response.json()

    if (!response.ok) {
      console.log("Response is no OK")
    } else {
      setLeads(data)
      setLoaded(true)
    }
  }

  useEffect(() => {
    getLeads()
  }, [])

  return (
    <>
      <button className='mb-5'>Create Lead</button>
    </>
  )
}

export default Table
