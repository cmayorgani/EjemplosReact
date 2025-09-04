import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPopulationSummary } from '../api/populationService'

export const fetchSummary = createAsyncThunk('dashboard/fetchSummary', async (_, { rejectWithValue }) => {
  try {
    const data = await getPopulationSummary()
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: err.message })
  }
})

const slice = createSlice({
  name: 'dashboard',
  initialState: { data: null, loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSummary.pending, (state) => { state.loading = true; state.error = null })
      .addCase(fetchSummary.fulfilled, (state, action) => { state.loading = false; state.data = action.payload })
      .addCase(fetchSummary.rejected, (state, action) => { state.loading = false; state.error = action.payload })
  }
})

export default slice.reducer