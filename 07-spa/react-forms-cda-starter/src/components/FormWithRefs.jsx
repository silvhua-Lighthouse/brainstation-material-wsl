import { useRef } from "react";

function FormWithRefs() {
  // TO DO: Create React ref for form
  // TO DO: Create React ref for confirm pw box

  const handleSubmit = () => {
    // TO DO: Get the DOM object using form ref
    // TO DO: Get field values from form ref
    // TO DO: Add logic to check all fields filled
    // TO DO: Add logic to check if pw's match
    // TO DO: Focus on confirmPassword if no match

    // This is where we would make an axios request
    // to our backend to add the user to our database.
    alert("Signed up successfully");
  };

  return (
    <form>
      <h2>Form with Refs</h2>
      <label>
        Email: <input type="text" name="email" />
      </label>
      <label>
        Password: <input type="password" name="password" />
      </label>
      <label>
        Confirm Password: <input type="password" name="confirmPassword" />
      </label>
      <button type="button">Sign Up</button>
    </form>
  );
}

export default FormWithRefs;
