import React from 'react'
import { Outlet } from 'react-router-dom'

export const AdminNavbar = () => {
  return (
    <div>
        <h1>ADMIN NAVBAR</h1>
        <Outlet/>
    </div>
  )
}
