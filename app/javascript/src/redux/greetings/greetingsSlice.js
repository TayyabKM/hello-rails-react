import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  message: '',
  isLoading: false,
};

export const fetchRandomGreeting = createAsyncThunk('greetings/fetchRandomGreeting', async () => {
  try {
    const response = await fetch('/api/v1/greetings'); 
    const data = await response.json();
    return data.message;
  } catch (error) {
    throw error;
  }
});

const greetingsSlice = createSlice({
  name: 'greeting',
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchRandomGreeting.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        message: action.payload.message,
      }))
      .addCase(fetchRandomGreeting.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default greetingsSlice.reducer;
