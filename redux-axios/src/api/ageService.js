import api from './axiosConfig'

export const getAgeDistribution = async (countryCode) => {
  // Endpoint hipotético
  const res = await api.get(`/age/${countryCode}`)
  return res.data
}
