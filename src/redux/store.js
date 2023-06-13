import { configureStore } from '@reduxjs/toolkit';
import { reducer as bookReducer } from './books/booksSlice';
import { reducer as categoriesReducer } from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});
