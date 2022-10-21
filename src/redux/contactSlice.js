import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, { payload: { name, number } }) {
      state.some(item => item.name.toLowerCase() === name.toLowerCase())
        ? alert(`${name} is alredy in contacts`)
        : state.push({
            name: name,
            number: number,
            id: nanoid(),
          });
    },
    deleteContact(state, { payload: id }) {
      return state.filter(item => item.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;
