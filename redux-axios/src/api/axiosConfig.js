import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.population.io/1.0' // placeholder - sustituir por la API demográfica gratuita que prefieras
})

// Interceptor para manejar errores globalmente y tokens si fueran necesarios
api.interceptors.response.use(
  response => response,
  error => {
    // Rechazar con el error para que los slices lo manejen
    return Promise.reject(error)
  }
)

export default api
