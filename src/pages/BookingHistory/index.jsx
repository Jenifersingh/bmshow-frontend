import React from "react";
import { ImageCard } from "../../components/ImageCard";

import styles from "./bookingHistory.module.css";

export const BookingHistory = () => {
  return (
    <div className={styles.bookingHistoryContainer}>
      <div className={styles.bookingHistoryRow}>
        <div>
          <ImageCard />
        </div>
        <div className={styles.bookingHistoryDetails}>
          <div className={styles.movieName}>Movie Name</div>
          <div className={styles.theaterName}>Theater Name</div>
          <div className={styles.timing}>10:00</div>
          <div>
            <span className={styles.bold}>Ticket No: </span> flkhdkshfkh
          </div>
          <div>
            <span className={styles.bold}>Seat No: </span> 1, 2, 3
          </div>
        </div>
      </div>
      <div className={styles.bookingHistoryRow}>
        <div>
          <ImageCard />
        </div>
        <div className={styles.bookingHistoryDetails}>
          <div className={styles.movieName}>Movie Name</div>
          <div className={styles.theaterName}>Theater Name</div>
          <div className={styles.timing}>10:00</div>
          <div>
            <span className={styles.bold}>Ticket No: </span> flkhdkshfkh
          </div>
          <div>
            <span className={styles.bold}>Seat No: </span> 1, 2, 3
          </div>
        </div>
      </div>
    </div>
  );
};
