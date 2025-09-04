import React from 'react'
import { ToastContainer, Toast } from 'react-bootstrap'
import { useSelector } from 'react-redux'

// Para demo simple: leer errores/estado de slices y mostrarlos.
function ToastsContainer(){
  const dashboardError = useSelector(s => s.dashboard.error)
  const countriesError = useSelector(s => s.countries.error)
  const populationError = useSelector(s => s.population.error)
  const ageError = useSelector(s => s.age.error)

  const errors = [dashboardError, countriesError, populationError, ageError].filter(Boolean)

  return (
    <div aria-live="polite" aria-atomic="true" style={{position: 'fixed', top: 70, right: 20, zIndex: 1060}}>
      <ToastContainer position="top-end">
        {errors.map((err, i) => (
          <Toast key={i} bg="danger" autohide delay={5000}>
            <Toast.Header>
              <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{err.message || JSON.stringify(err)}</Toast.Body>
          </Toast>
        ))}
      </ToastContainer>
    </div>
  )
}

export default ToastsContainer
