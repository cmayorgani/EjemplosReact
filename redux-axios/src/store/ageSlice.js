import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getAgeDistribution } from '../api/ageService'

export const fetchAgeDistribution = createAsyncThunk('age/fetch', async (countryCode, { rejectWithValue }) => {
  try {
    const data = await getAgeDistribution(countryCode)
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: err.message })
  }
})

const slice = createSlice({
  name: 'age',
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAgeDistribution.pending, (state) => { state.loading = true; state.error = null })
      .addCase(fetchAgeDistribution.fulfilled, (state, action) => { state.loading = false; state.items = action.payload })
      .addCase(fetchAgeDistribution.rejected, (state, action) => { state.loading = false; state.error = action.payload })
  }
})

export default slice.reducer
