import { useRef } from "react";

function FormWithRefs() {
  // TO DO: Create React ref for form
  const formRef = useRef(); // form element

  // TO DO: Create React ref for confirm pw box
  const confirmPasswordRef = useRef();

  const handleSubmit = () => {
    // TO DO: Get the DOM object using form ref
    const formEl = formRef.current;
    const confirmPasswordEl = confirmPasswordRef.current

    // TO DO: Get field values from form ref
    const emailVal = formEl.email.value;
    const passwordVal = formEl.password.value;
    const passwordConfirmedVal = formEl.confirmPassword.value;

    // TO DO: Add logic to check all fields filled
    if (!emailVal || !passwordVal || !passwordConfirmedVal) {
      alert('Pleaes fill out all the fields.');
      return;
    }
    // TO DO: Add logic to check if pw's match
    if (passwordVal !== passwordConfirmedVal) {
      alert('Please make sure that your passowrds are matching!');
      return;
    }
    // TO DO: Focus on confirmPassword if no match
    confirmPasswordRef.focus();


    // This is where we would make an axios request
    // to our backend to add the user to our database.
    alert("Signed up successfully");
  };

  return (
    <form ref={formRef}>
      <h2>Form with Refs</h2>
      <label>
        Email: <input type="text" name="email" />
      </label>
      <label>
        Password: <input type="password" name="password" />
      </label>
      <label>
        Confirm Password: <input type="password" name="confirmPassword" ref={confirmPasswordRef} />
      </label>
      <button type="button">Sign Up</button>
    </form>
  );
}

export default FormWithRefs;
