import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }){
  const auth = useSelector(s => s.auth)
  if (!auth.user) return <Navigate to="/login" replace />
  return children
}

export default PrivateRoute