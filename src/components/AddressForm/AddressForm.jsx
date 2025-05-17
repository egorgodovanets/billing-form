import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./AddressForm.module.css";

export default function AddressForm() {
  return (
    <div className={styles.container}>
      <h2>Address details</h2>
      <div className={styles.form}>
        <div className={styles.selectWrapper}>
          <Select
            label="Country / Region"
            options={["United States"]}
            defaultOption="United States"
            disabled={true}
          />
        </div>
        <Input label="Address" placeholder="Street address" />
        <div className={styles.inputWrapper}>
          <Input placeholder="Apartment, suite, etc (optional)" withoutLabel={true} />
        </div>
        <div className={styles.rowContainer}>
          <Input label="City" placeholder="City" />
          <Select
            label="State"
            options={["Alabama", "Minnesota", "Texas"]}
            defaultOption="State"
          />
          <Input label="Zip" placeholder="123" />
        </div>
      </div>
    </div>
  );
}
