import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    remove: (state, { payload }) => {
      state.books = state.books.filter((book) => book.id !== payload.id);
    },
  },
});

export const { actions, reducer } = booksSlice;
