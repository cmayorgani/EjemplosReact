import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopulation } from '../store/populationSlice'
import LoadingSpinner from '../components/LoadingSpinner'
import { DataGrid } from '@mui/x-data-grid'

function PopulationPage(){
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector(s => s.population)

  useEffect(()=>{ dispatch(fetchPopulation()) }, [dispatch])

  const rows = (items || []).map((c, idx) => ({ id: idx, name: c.name || c.common || c.country || 'N/A', region: c.region || c.region || 'N/A' }))
  const columns = [ { field: 'name', headerName: 'Nombre', width: 300 }, { field: 'region', headerName: 'Region', width: 200 } ]

  return (
    <div>
      <h2>Población / Países</h2>
      {loading && <LoadingSpinner />}
      {error && <div className="alert alert-danger">Error: {error.message || JSON.stringify(error)}</div>}
      {items && <div style={{height: 500}}><DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} /></div>}
    </div>
  )
}

export default PopulationPage
