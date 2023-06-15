import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import styles from './styles/Form.module.css';
import { addBook } from '../redux/books/booksThunk';

const Form = () => {
  const initialFormData = { title: '', author: '', category: '' };
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialFormData);
  const handleTitleChange = (e) => {
    setFormData((data) => ({
      ...data,
      title: e.target.value,
    }));
  };

  const handleAuthorChange = (e) => {
    setFormData(((data) => ({
      ...data,
      author: e.target.value,
    })));
  };

  const submitBook = (e) => {
    e.preventDefault();
    dispatch(addBook({ ...formData, itemId: v4() }));
    setFormData(initialFormData);
  };
  return (
    <div className={styles.container}>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBook}>
        <div className="form-group">
          <input required onChange={handleTitleChange} value={formData.title} type="text" placeholder="Book title" />
        </div>
        <div className="form-group">
          <input required onChange={handleAuthorChange} value={formData.author} type="text" placeholder="Author" />
        </div>
        <button type="submit"> ADD BOOK</button>
      </form>
    </div>
  );
};

export default Form;
