import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import PopulationPage from './pages/PopulationPage'
import CountriesPage from './pages/CountriesPage'
import AgeDistributionPage from './pages/AgeDistributionPage'
import AppMenu from './components/AppMenu'
import ToastsContainer from './components/ToastsContainer'
import PrivateRoute from './components/PrivateRoute'

function App() {
  return (
    <div>
      <AppMenu />
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={<PrivateRoute><DashboardPage/></PrivateRoute>}
          />

          <Route
            path="/population"
            element={<PrivateRoute><PopulationPage/></PrivateRoute>}
          />

          <Route
            path="/countries"
            element={<PrivateRoute><CountriesPage/></PrivateRoute>}
          />

          <Route
            path="/age"
            element={<PrivateRoute><AgeDistributionPage/></PrivateRoute>}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <ToastsContainer />
    </div>
  )
}

export default App
