// import './Form.scss';
import {useState} from 'react';

const Form = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: ''
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const firstNameValue = event.target.firstName.value;
    if  (firstNameValue.length < 3) {
      console.log('3+ characters required');
    }
  }

  const [values, setValues] = useState(initialValues);
  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setValues({
      ...values, 
      [name]: value
    })
  }

  // const handleFirstNameChange = (event) => {

  // }
  // const handleLastNameChange = (event) => {
    
  // }
  // const handleEmailChange = (event) => {
    
  // }
  return (
    <>
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="firstName">First Name</label>
      <input 
        name="firstName" 
        id="firstName" 
        placeholder="first name"
        value={values.firstName}
        // onChange={handleFirstNameChange}
        onChange={handleInputChange}
      />
      <label htmlFor="lastName">Last Name</label>
      <input 
        name="lastName" 
        id="lastName" 
        placeholder="last name"
        value={values.lastName}
        onChange={handleInputChange}
        // onChange={handleLastNameChange}
      />
      <label htmlFor="email">Email</label>
      <input 
        name="email" 
        id="email" 
        placeholder="email"
        onChange={handleInputChange}
        value={values.email}
        // onChange={handleEmailChange}
      />
      <button type="submit">submit</button>
    </form>
    <p>Name: {values.firstName} {values.lastName}</p>
    <p>Email: {values.email}</p>
    </>

  )
}

export default Form
