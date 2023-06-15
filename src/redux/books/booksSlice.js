import { createSlice } from '@reduxjs/toolkit';
import { addBook, deleteBook, fetchBooks } from './booksThunk';

const initialState = {
  books: {},
  error: undefined,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, { payload }) => {
      state.books = [...state.books, payload];
    },
    remove: (state, { payload }) => {
      state.books = state.books.filter(
        (book) => book.itemId !== payload.itemId,
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, { payload }) => {
      if (payload) state.books = payload;
      else state.books = {};
      state.error = undefined;
    });

    builder.addCase(addBook.fulfilled, (state, { payload }) => {
      state.books = {
        ...state.books,
        [payload.itemId]: [{ ...payload, itemId: undefined }],
      };

      state.error = undefined;
    });

    builder.addCase(deleteBook.fulfilled, (state, { payload }) => {
      delete state.books[payload];
      state.error = undefined;
    });

    builder.addCase(deleteBook.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(addBook.rejected, (state, { payload }) => {
      state.error = payload;
    });

    builder.addCase(fetchBooks.rejected, (state, { payload }) => {
      state.error = payload;
    });
  },
});

export const { actions, reducer } = booksSlice;
