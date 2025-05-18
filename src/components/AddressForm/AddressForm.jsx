import React from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";
import styles from "./AddressForm.module.css";

export default function AddressForm({ register, errors }) {
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
            {...register("country")}
            error={errors.country?.message}
          />
        </div>
        <Input
          label="Address"
          placeholder="Street address"
          {...register("streetAddress")}
          error={errors.streetAddress?.message}
        />
        <div className={styles.inputWrapper}>
          <Input
            placeholder="Apartment, suite, etc (optional)"
            withoutLabel={true}
            {...register("apartment")}
            error={errors.apartment?.message}
          />
        </div>
        <div className={styles.rowContainer}>
          <Input
            label="City"
            placeholder="City"
            {...register("city")}
            error={errors.city?.message}
          />
          <Select
            label="State"
            options={["Alabama", "Minnesota", "Texas"]}
            defaultOption="State"
            {...register("state")}
            error={errors.state?.message}
          />
          <Input
            label="Zip"
            placeholder="123"
            {...register("zip")}
            error={errors.zip?.message}
          />
        </div>
      </div>
    </div>
  );
}
