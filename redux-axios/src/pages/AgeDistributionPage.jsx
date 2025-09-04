import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAgeDistribution } from '../store/ageSlice'
import LoadingSpinner from '../components/LoadingSpinner'

function AgeDistributionPage(){
  const [country, setCountry] = useState('')
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector(s => s.age)

  const handleFetch = () => {
    if (!country) return
    dispatch(fetchAgeDistribution(country))
  }

  return (
    <div>
      <h2>Age distribution</h2>
      <div className="mb-3">
        <input value={country} onChange={e => setCountry(e.target.value)} className="form-control" placeholder="Country code or name" />
      </div>
      <button className="btn btn-primary mb-3" onClick={handleFetch}>Buscar</button>
      {loading && <LoadingSpinner />}
      {error && <div className="alert alert-danger">Error: {error.message || JSON.stringify(error)}</div>}
      {items && <pre>{JSON.stringify(items, null, 2)}</pre>}
    </div>
  )
}

export default AgeDistributionPage
