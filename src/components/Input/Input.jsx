import React from "react";
import styles from "./Input.module.css";

export default function Input({
  label,
  placeholder = "",
  type = "text",
  withIcon = false,
  withoutLabel = false,
  error,
  ...rest
}) {
  return (
    <div className={styles.inputContainer}>
      {!withoutLabel && <label className={styles.label}>{label}</label>}

      {withIcon ? (
        <div className={styles.inputWrapper}>
          <input
            className={`${styles.input} ${styles.inputWithLeftPadding} ${error ? styles.error : ""}`}
            type={type}
            placeholder={placeholder}
            {...rest}
          />
          <img
            className={styles.paymentIcon}
            src={`${process.env.PUBLIC_URL}/Payment method icon.svg`}
            alt="payment-icon"
          />
        </div>
      ) : (
        <input
          className={`${styles.input} ${error ? styles.error : ""}`}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
      )}

      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
}
