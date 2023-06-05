import "./signUpForm.style.css";
import React, { useState } from "react";

const defaultFormData = {
  displayName: "",
  password: "",
};

const SignInForm = () => {
  const [formData, setFormData] = useState(defaultFormData);
  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <h1>Sign In</h1>
        <form onSubmit={onSubmitHandler}></form>
        <label htmlFor="display"><Display label</label>
      </div>
    </div>
  );
};

export default SignInForm;
