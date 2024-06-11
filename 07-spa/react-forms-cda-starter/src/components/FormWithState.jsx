import { useState } from "react";
import "./FormWithState.css";

function FormWithState() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // TO DO: create a change handler for all inputs
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  }
  const handleChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);

  const isPasswordValid = () => {
    // TO DO: Check if the password is too short
    if (password.length < 8) {
      return false;
    }

    // TO DO: Check if password doesn't include
    // special character
    if (!password.includes('$'))
      return false;

    return true;
  };

  const isConfirmPasswordValid = () => {
    // TO DO: Add logic to check if the PWs match.
    return true;
  };

  const isFormValid = () => {
    // TO DO: Check if the fields are all filled
    if (!email || !password || !passwordConfirmed) {
      return;
    }

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
      {isFormValid() ? 'Ready to submit' : 'Still need to complete'}
      <label>
        Email: <input type="text" name="email" value={email} onChange={handleChangeEmail} />
      </label>
      <label>
        Password: <input type="password" name="password" value={password} onChange={handleChangePassword} />
        <p>
          {!isPasswordValid() && <div>Your password needs to be 8 characters long and contain a $</div>}
        </p>
      </label>
      <label>
        Confirm Password: <input type="password" name="confirmPassword" value={confirmPassword} onChange={handleChangeConfirmPassword} />
      </label>
      <button type="submit" disabled={!isFormValid()}>Sign Up</button>
    </form>
  );
}

export default FormWithState;
