import React, { useEffect, useState } from "react";
import styles from "./progressBar.module.scss";
const ProgressBar = ({ value = 0, onComplete }) => {
  useEffect(() => {
    if (value >= 100) {
      onComplete(true);
    }
  }, [value]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.progress_container}>
          <div
            className={styles.progress_bar}
            style={{ width: `${value}%`, color: "black" }}
          >
            {value}%
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;