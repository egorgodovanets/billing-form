import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function App() {
  const schema = yup.object().shape({
    cardNumber: yup
      .string()
      .required("This field is required.")
      .test("is-valid-card", "Invalid card number.", (value) => {
        if (!value) return false;
        const digitsOnly = value.replace(/\s+/g, "");
        return /^\d{16}$/.test(digitsOnly);
      }),
    cardholderName: yup
      .string()
      .required("Cardholder name is required.")
      .matches(/^[a-zA-Z\s]+$/, "Only letters and spaces allowed.")
      .min(3, "Name is too short."),
    expiry: yup
      .string()
      .required("Expiry date is required.")
      .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid format. Use MM/YY."),
    cvv: yup
      .string()
      .required("CVV is required.")
      .matches(/^\d{3,4}$/, "Invalid CVV."),
    email: yup
      .string()
      .required("Email is required.")
      .email("Invalid email address."),
    country: yup.string().required("Country is required."),
    streetAddress: yup.string().required("Street address is required."),
    city: yup.string().required("City is required."),
    state: yup
      .string()
      .required("State is required.")
      .notOneOf(["state"], "Please select a state."),
    zip: yup
      .string()
      .required("ZIP code is required.")
      .matches(/^\d{5}(-\d{4})?$/, "Invalid ZIP code."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="title">Billing Information</div>
      <div className="subtitle">Update your billing details and address</div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-block">
          <div className="form-block-title">Payment details</div>
          <div className="inputs-block">
            <div className="input-container">
              <div className="input-label">Card number</div>
              <div className="input-wrapper">
                <img
                  className="payment-icon"
                  src={`${process.env.PUBLIC_URL}/Payment method icon.svg`}
                  alt="payment"
                />
                <input
                  className={`input input-card-number ${
                    errors.cardNumber ? "error" : ""
                  }`}
                  type="text"
                  placeholder="1234 1234 1234 1234"
                  {...register("cardNumber")}
                />
              </div>
              <p className="error-message">{errors.cardNumber?.message}</p>
            </div>
            <div className="input-container">
              <div className="input-label">Cardholder name</div>
              <input
                className={`input ${errors.cardholderName ? "error" : ""}`}
                type="text"
                placeholder="Full name on card"
                {...register("cardholderName")}
              />
              <p className="error-message">{errors.cardholderName?.message}</p>
            </div>
            <div className="inputs-row">
              <div className="input-container">
                <div className="input-label">Expiry</div>
                <input
                  className={`input ${errors.expiry ? "error" : ""}`}
                  type="text"
                  placeholder="MM/YY"
                  {...register("expiry")}
                />
                <p className="error-message">{errors.expiry?.message}</p>
              </div>
              <div className="input-container">
                <div className="input-label">CVV</div>
                <input
                  className={`input ${errors.cvv ? "error" : ""}`}
                  type="text"
                  placeholder="123"
                  {...register("cvv")}
                />
                <p className="error-message">{errors.cvv?.message}</p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div className="form-block">
          <div className="form-block-title">Email address</div>
          <div className="inputs-block">
            <div className="input-container">
              <div className="input-label">Email</div>
              <input
                className={`input ${errors.email ? "error" : ""}`}
                type="text"
                placeholder="user@example.com"
                {...register("email")}
              />
              <p className="error-message">{errors.email?.message}</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="form-block pt-24">
          <div className="form-block-title">Address details</div>
          <div className="inputs-block">
            <div className="input-container">
              <div className="input-label">Country / Region</div>
              <div className="select-wrapper">
                <select
                  {...register("country")}
                  className="select"
                  defaultValue="us"
                  disabled
                >
                  <option value="us">United States</option>
                </select>
                <img
                  src={`${process.env.PUBLIC_URL}/arrow-icon.png`}
                  className="select-icon"
                  alt="dropdown icon"
                />
              </div>
            </div>

            <div className="input-container">
              <div className="input-label">Address</div>
              <input
                className={`input ${errors.streetAddress ? "error" : ""}`}
                type="text"
                placeholder="Street address"
                {...register("streetAddress")}
              />
              <p className="error-message">{errors.streetAddress?.message}</p>
              <input
                className={`input mt-16 ${errors.apartment ? "error" : ""}`}
                type="text"
                placeholder="Apartment, suite, etc (optional)"
                {...register("apartment")}
              />
            </div>

            <div className="inputs-row">
              <div className="input-container">
                <div className="input-label">City</div>
                <input
                  className={`input ${errors.city ? "error" : ""}`}
                  type="text"
                  placeholder="City"
                  {...register("city")}
                />
                <p className="error-message">{errors.city?.message}</p>
              </div>
              <div className="input-container">
                <div className="input-label">State</div>
                <div className="select-wrapper">
                  <select
                    {...register("state")}
                    className="select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      State
                    </option>
                    <option value="alabama">Alabama</option>
                    <option value="georgia">Georgia</option>
                    <option value="texas">Texas</option>
                  </select>
                  <img
                    src={`${process.env.PUBLIC_URL}/arrow-icon.png`}
                    className="select-icon"
                    alt="dropdown icon"
                  />
                </div>
                <p className="error-message">{errors.state?.message}</p>
              </div>
              <div className="input-container">
                <div className="input-label">Zip</div>
                <input
                  className={`input ${errors.zip ? "error" : ""}`}
                  type="text"
                  placeholder="123"
                  {...register("zip")}
                />
                <p className="error-message">{errors.zip?.message}</p>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn" disabled={!isValid}>
          Save changes
        </button>
      </form>
    </div>
  );
}

export default App;
