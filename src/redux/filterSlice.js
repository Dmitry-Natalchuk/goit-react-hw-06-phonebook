import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
