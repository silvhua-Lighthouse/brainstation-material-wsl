import { useState } from "react";
import "./FormWithState.css";

function FormWithState() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // TO DO: create a change handler for all inputs
  const handleChangeEmail = () => {};
  const handleChangePassword = () => {};
  const handleChangeConfirmPassword = () => {};

  const isPasswordValid = () => {
    // TO DO: Check if the password is too short

    // TO DO: Check if password doesn't include
    // special character

    return true;
  };

  const isConfirmPasswordValid = () => {
    // TO DO: Add logic to check if the PWs match.
    return true;
  };

  const isFormValid = () => {
    // TO DO: Check if the fields are all filled

    // Check if the password field is valid
    if (!isPasswordValid()) {
      return false;
    }
    // Check if the confirm password field is valid
    if (!isConfirmPasswordValid()) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      // This is where we would make an axios request
      // to our backend to add the user to our database.
      alert("Signed up successfully");
    } else {
      alert("Failed to sign up, you have errors in your form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form with State</h2>
      <label>
        Email: <input type="text" name="email" />
      </label>
      <label>
        Password: <input type="password" name="password" />
      </label>
      <label>
        Confirm Password: <input type="password" name="confirmPassword" />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default FormWithState;
