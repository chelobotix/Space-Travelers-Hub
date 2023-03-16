import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  rocketsArray: null,
  isLoading: false,
  isError: false,
};

export const fetchRockets = createAsyncThunk("get/rockets", async () => {
  const url = "https://api.spacexdata.com/v3/rockets";
  const response = await fetch(url);
  let data = await response.json();
  data = data.map(({ id, rocket_name, description, flickr_images }) => ({
    id,
    rocket_name,
    description,
    flickr_images,
  }));
  console.log(data);
  return data;
});

export const rocketsSlice = createSlice({
  name: "Rockets",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRockets.pending, (state) => {
      return {
        ...state,
        isLoading: true,
      };
    });

    builder.addCase(fetchRockets.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        rocketsArray: action.payload,
      };
    });

    builder.addCase(fetchRockets.rejected, (state, action) => {
      console.log("Error", action.error.message);
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    });
  },
});

export const { increment } = rocketsSlice.actions;

export default rocketsSlice.reducer;
