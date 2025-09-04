import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getPopulationSummary } from '../api/populationService'

export const fetchPopulation = createAsyncThunk('population/fetch', async (_, { rejectWithValue }) => {
  try {
    const data = await getPopulationSummary()
    return data
  } catch (err) {
    return rejectWithValue(err.response?.data || { message: err.message })
  }
})

const slice = createSlice({
  name: 'population',
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopulation.pending, (state) => { state.loading = true; state.error = null })
      .addCase(fetchPopulation.fulfilled, (state, action) => { state.loading = false; state.items = action.payload })
      .addCase(fetchPopulation.rejected, (state, action) => { state.loading = false; state.error = action.payload })
  }
})

export default slice.reducer