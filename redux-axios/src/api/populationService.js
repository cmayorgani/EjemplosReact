import api from './axiosConfig'

export const getPopulationSummary = async () => {
  // Ejemplo usando REST Countries para un conteo simple o reemplazar por API demográfica
  const res = await api.get('/all')
  return res.data
}