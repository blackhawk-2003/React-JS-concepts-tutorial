import { useState } from "react";
import { loginFormControl } from "../../config";
import CommonForm from "../Common-form";

const intitialState = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  const [loginFormData, setLoginFormData] = useState({ intitialState });

  const handleSubmit = (event) => {
    event.preventDefault();
    //api logic here......

    setLoginFormData(intitialState);
  };

  return (
    <div>
      <h1>Login Component</h1>

      <CommonForm
        setFormData={setLoginFormData}
        formData={loginFormData}
        formControls={loginFormControl}
        buttonText={"Login"}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default LoginComponent;
