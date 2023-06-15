import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import styles from './styles/Booklist.module.css';
import Book from './Book';
import { fetchBooks } from '../redux/books/booksThunk';

const formatResponse = (response) => {
  const formattedData = [];
  Object.keys(response).forEach((id) => {
    formattedData.push({
      itemId: id,
      ...response[id][0],
    });
  });

  return formattedData;
};

const Booklist = () => {
  const books = useSelector((state) => state.books.books);
  const error = useSelector((state) => state.books.error);
  const dispalyingBooks = formatResponse(books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  return (
    <>
      <div className={styles['inner-component']}>
        {error && (
          <div className={styles.error}>
            <p>{error}</p>
          </div>
        )}
        {Object.keys(books).length ? dispalyingBooks.map((book) => (
          <Book
            key={book.itemId}
            author={book.author}
            category={book.category}
            title={book.title}
            itemId={book.itemId}
          />
        ))
          : 'No book found'}
      </div>
    </>
  );
};

export default Booklist;
