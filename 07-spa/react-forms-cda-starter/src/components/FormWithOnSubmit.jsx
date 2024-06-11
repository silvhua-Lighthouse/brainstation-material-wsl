function FormWithOnSubmit() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // TO DO: Get the DOM object of form
    const formEl = event.target;
    console.log(formEl);

    // TO DO: Get field values from form
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

    // This is where we would make an axios request
    // to our backend to add the user to our database.
    alert("Signed up successfully");
  };

  return (
    <form onSubmit={handleSubmit}>
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
