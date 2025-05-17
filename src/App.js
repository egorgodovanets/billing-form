import "./App.css";
import PaymentForm from "./components/PaymentForm/PaymentForm";
import EmailForm from "./components/EmailForm/EmailForm";
import AddressForm from "./components/AddressForm/AddressForm";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <h1>Billing Information</h1>
      <h3>Update your billing details and address</h3>
      <form>
        <PaymentForm />
        <hr />
        <EmailForm />
        <hr />
        <AddressForm />

        <div className="btn-container">
          <Button>Save changes</Button>
        </div>
      </form>
    </div>
  );
}

export default App;
