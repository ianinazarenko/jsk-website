import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

// for Protected route solution visit https://www.robinwieruch.de/react-router-private-routes/

interface Props {
  children?: JSX.Element
  user: string
  redirectPath: string
}

export default function ProtectedRoute({ children, user, redirectPath }: Props) {
  if (!user) {
    return <Navigate to={redirectPath} />
  }

  return children || <Outlet />
}
