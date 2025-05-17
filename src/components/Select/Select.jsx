import React from "react";
import styles from "./Select.module.css";

export default function Select({
  label,
  options = [],
  defaultOption,
  disabled = false,
}) {
  return (
    <div className={styles.selectContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.selectWrapper}>
        <select className={styles.select} defaultValue="" disabled={disabled}>
          <option value="" disabled>
            {defaultOption}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <img
          src={`${process.env.PUBLIC_URL}/arrow-icon.png`}
          className={styles.selectIcon}
          alt="dropdown-icon"
        />
      </div>
    </div>
  );
}
