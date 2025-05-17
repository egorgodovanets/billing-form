import React from "react";
import Input from "../Input/Input";
import styles from "./PaymentForm.module.css";

export default function PaymentForm() {
  return (
    <div className={styles.container}>
      <h2>Payment details</h2>
      <div className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input
            label="Card number"
            placeholder="1234 1234 1234 1234"
            withIcon={true}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input label="Cardholder name" placeholder="Full name on card" />
        </div>
        <div className={styles.rowContainer}>
          <Input label="Expiry" placeholder="MM/YY" />
          <Input label="CVV" placeholder="123" />
        </div>
      </div>
    </div>
  );
}
