import { useState } from "react";
import CommonForm from "../Common-form";
import { registerFormControl } from "../../config";

const initialState = {
  name: "",
  email: "",
  password: "",
};
const RegisterComponent = () => {
  const [registerFormData, setRegisterFormData] = useState(initialState);

  const handleSubmit = (event) => {
    event.preventDefault();

    //your register api call here to interact with

    setRegisterFormData(initialState);
  };
  return (
    <div>
      <h1>Register Component</h1>

      <CommonForm
        formControls={registerFormControl}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default RegisterComponent;
