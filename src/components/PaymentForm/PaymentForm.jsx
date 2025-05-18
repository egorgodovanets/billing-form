import React from "react";
import Input from "../Input/Input";
import styles from "./PaymentForm.module.css";

export default function PaymentForm({ register, errors }) {
  return (
    <div className={styles.container}>
      <h2>Payment details</h2>
      <div className={styles.form}>
        <div className={styles.inputWrapper}>
          <Input
            label="Card number"
            placeholder="1234 1234 1234 1234"
            withIcon={true}
            {...register("cardNumber")}
            error={errors.cardNumber?.message}
          />
        </div>
        <div className={styles.inputWrapper}>
          <Input
            label="Cardholder name"
            placeholder="Full name on card"
            {...register("cardholderName")}
            error={errors.cardholderName?.message}
          />
        </div>
        <div className={styles.rowContainer}>
          <Input
            label="Expiry"
            placeholder="MM/YY"
            {...register("expiry")}
            error={errors.expiry?.message}
          />
          <Input
            label="CVV"
            placeholder="123"
            {...register("cvv")}
            error={errors.cvv?.message}
          />
        </div>
      </div>
    </div>
  );
}
