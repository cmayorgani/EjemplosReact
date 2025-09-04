import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../store/countriesSlice'
import LoadingSpinner from '../components/LoadingSpinner'

function CountriesPage(){
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector(s => s.countries)

  useEffect(()=>{ dispatch(fetchCountries()) }, [dispatch])

  return (
    <div>
      <h2>Countries</h2>
      {loading && <LoadingSpinner />}
      {error && <div className="alert alert-danger">Error: {error.message || JSON.stringify(error)}</div>}
      <ul>
        {(items || []).slice(0,50).map((c, i) => <li key={i}>{c.name?.common || c.name || c.country || JSON.stringify(c)}</li>)}
      </ul>
    </div>
  )
}

export default CountriesPage
