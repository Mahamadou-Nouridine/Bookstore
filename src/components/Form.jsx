import React from 'react';
import styles from './styles/Form.module.css';

const Form = () => (
  <div className={styles.container}>
    <h3>ADD NEW BOOK</h3>
    <form>
      <div className="form-group">
        <input type="text" placeholder="Book title" />
      </div>
      <div className="form-group">
        <input type="text" placeholder="Author" />
      </div>
      <button type="submit"> ADD BOOK</button>
    </form>
  </div>
);

export default Form;
