import React from 'react';
import styles from './styles/Booklist.module.css';
import Book from './Book';

const Booklist = () => (
  <>
    <div className={styles['inner-component']}>
      <Book />
      <Book />
      <Book />
    </div>
  </>
);

export default Booklist;
