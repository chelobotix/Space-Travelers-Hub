import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missionsArray: null,
  isLoading: false,
  isError: false,
}

export const fetchMissions = createAsyncThunk('get/missions', async () => {
  const url = 'https://api.spacexdata.com/v3/missions'
  const response = await fetch(url)
  let data = await response.json()
  data = data.map(({ mission_id, mission_name, description }) => ({ mission_id, mission_name, description }))
  return data;
})

export const missionsSlice = createSlice({
  name: 'Missions',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissions.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      }
    })

    builder.addCase(fetchMissions.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        missionsArray: action.payload,
      }
    })

    builder.addCase(fetchMissions.rejected, (state, action) => {
      console.log('Error', action.error.message)
      return {
        ...state,
        isError: true,
        isLoading: false,
      }
    })
  }
})

export const { increment } = missionsSlice.actions;

export default missionsSlice.reducer;
