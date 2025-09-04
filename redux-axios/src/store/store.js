import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import dashboardReducer from './dashboardSlice'
import populationReducer from './populationSlice'
import countriesReducer from './countriesSlice'
import ageReducer from './ageSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    dashboard: dashboardReducer,
    population: populationReducer,
    countries: countriesReducer,
    age: ageReducer,
  }
})

export default store