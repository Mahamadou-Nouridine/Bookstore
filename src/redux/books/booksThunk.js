import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios';

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',

  // eslint-disable-next-line no-unused-vars
  async (payload = undefined, thunkApi) => {
    try {
      const response = await axios.get('/books');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const addBook = createAsyncThunk(
  'books/add',
  async (payload, thunkApi) => {
    try {
      await axios.post('/books', {
        item_id: payload.itemId,
        title: payload.title,
        author: payload.author,
        category: payload.category,
      });

      return payload;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteBook = createAsyncThunk('books/delete', async (id, thunkApi) => {
  try {
    await axios.delete(`/books/${id}`);
    return id;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
