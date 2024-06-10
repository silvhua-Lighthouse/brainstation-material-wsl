function FormWithOnSubmit() {
  const handleSubmit = (event) => {
    // TO DO: Get the DOM object of form
    // TO DO: Get field values from form
    // TO DO: Add logic to check all fields filled
    // TO DO: Add logic to check if pw's match

    // This is where we would make an axios request
    // to our backend to add the user to our database.
    alert("Signed up successfully");
  };

  return (
    <form>
      <h2>Form with onSubmit</h2>
      <label>
        Email: <input type="text" name="email" />
      </label>
      <label>
        Password: <input type="password" name="password" />
      </label>
      <label>
        Confirm Password: <input type="password" name="confirmPassword" />
      </label>
      <button>Sign Up</button>
    </form>
  );
}

export default FormWithOnSubmit;
