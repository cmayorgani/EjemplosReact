import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCountries } from '../api/countriesService'

export const fetchCountries = createAsyncThunk('countries/fetch', async (_, { rejectWithValue }) => {
  try {
    const data = await getCountries()
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: err.message })
  }
})

const slice = createSlice({
  name: 'countries',
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => { state.loading = true; state.error = null })
      .addCase(fetchCountries.fulfilled, (state, action) => { state.loading = false; state.items = action.payload })
      .addCase(fetchCountries.rejected, (state, action) => { state.loading = false; state.error = action.payload })
  }
})

export default slice.reducer