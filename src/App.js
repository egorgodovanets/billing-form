import "./App.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import EmailForm from "./components/EmailForm/EmailForm";
import AddressForm from "./components/AddressForm/AddressForm";
import Button from "./components/Button/Button";

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
    mode: "onTouched",
    reValidateMode: "onBlur",
    resolver: yupResolver(schema),
    defaultValues: {
    country: "United States",
  },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Billing Information</h1>
      <h3>Update your billing details and address</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <PaymentForm register={register} errors={errors} />
        <hr />
        <EmailForm register={register} errors={errors} />
        <hr />
        <AddressForm register={register} errors={errors} />

        <div className="btn-container">
          <Button type="submit" disabled={!isValid}>
            Save changes
          </Button>
        </div>
      </form>
    </div>
  );
}

export default App;
