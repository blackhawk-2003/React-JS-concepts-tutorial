import { useState } from "react";

const FormComponent = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  //   const handleInputChange = (event) => {
  //     const { value } = event.target;
  //     setNameValue(value);
  //   };

  //   const handleEmailChange = (event) => {
  //     const { value } = event.target;
  //     setEmailValue(value);
  //   };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmission = (event) => {
    event.preventDefault();
    console.log(formData);

    //call the api to the backend here and then pass the values of
    //the form to the backend
  };
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleFormSubmission}>
        <input
          value={formData.name}
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleOnChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
