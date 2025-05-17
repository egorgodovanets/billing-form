import React from "react";
import Input from "../Input/Input";
import styles from './EmailForm.module.css'

export default function EmailForm() {
  return (
    <div className={styles.container}>
      <h2>Email details</h2>
      <div className={styles.form}>
        <Input label="Email" placeholder="user@example.com" />
      </div>
    </div>
  );
}
