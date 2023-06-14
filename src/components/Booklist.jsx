import { useSelector } from 'react-redux';
import React from 'react';
import styles from './styles/Booklist.module.css';
import Book from './Book';

const Booklist = () => {
  const books = useSelector((state) => state.books.books);
  return (
    <>
      <div className={styles['inner-component']}>
        {books.map((book) => (
          <Book
            key={book.title}
            author={book.author}
            category={book.category}
            title={book.title}
            itemId={book.itemId}
          />
        ))}
      </div>
    </>
  );
};

export default Booklist;
