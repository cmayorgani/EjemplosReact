import api from './axiosConfig'

export const getCountries = async () => {
  const res = await api.get('/all')
  return res.data
}
