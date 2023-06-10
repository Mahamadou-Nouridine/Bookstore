import React from 'react';
import ProgressBar from 'react-customizable-progressbar';
import styles from './styles/Book.module.css';

const Book = () => (
  <div className={styles.container}>
    <div className={styles.book}>
      <div>
        <h4 className="category">Action</h4>
        <h2 className="title">The Hunger Games</h2>
        <h5 className="author">Suzanne Collins</h5>

        <ul className="actions">
          <li>comments</li>
          <li>Remove</li>
          <li>Edit</li>
        </ul>
      </div>

      <div className={styles.analytics}>
        <div className="spinner">
          <ProgressBar
            radius={35}
            progress={64}
            strokeWidth={5}
            strokeColor="#379cf6"
            trackStrokeWidth={7}
            trackStrokeColor="#e6e6e6"
            pointerFill="white"
            pointerStrokeWidth={7}
            pointerStrokeColor="indianred"
          />
          <div className="percentage">
            <h5>64%</h5>
            <h6>Completed</h6>
          </div>
        </div>

        <div className="readin-state">
          <h4>CURRENT CHAPTER</h4>
          <h3 className="chapter">Chapter 17</h3>

          <button type="submit">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  </div>
);

export default Book;
