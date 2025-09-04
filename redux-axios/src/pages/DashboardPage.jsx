import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSummary } from '../store/dashboardSlice'
import LoadingSpinner from '../components/LoadingSpinner'

function DashboardPage() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(s => s.dashboard)

  useEffect(() => {
    dispatch(fetchSummary())
  }, [dispatch])

  return (
    <div>
      <h2>Dashboard</h2>
      {loading && <LoadingSpinner />}
      {error && <div className="alert alert-danger">Error: {error.message || JSON.stringify(error)}</div>}
      {data && <pre style={{maxHeight: 400, overflow: 'auto'}}>{JSON.stringify(data.slice(0,50), null, 2)}</pre>}
    </div>
  )
}

export default DashboardPage