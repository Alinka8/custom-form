import React, { useState } from "react";
import "./signUpForm.style.css";

const defaultFormData = {
  displayName: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formData, setFormData] = useState(defaultFormData);

  const onChangeHandler = (e) => {
    //setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    //1st step- create an object with three keys and values. initial values should be empty string
    //brand, model, year,
  };
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1> Please sign up:</h1>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="display"> Display Name</label>
          <input
            name="displayName"
            onChange={onChangeHandler}
            value={formData.displayName}
          />
          <label htmlFor="Password"> Password</label>
          <input
            name="password"
            onChange={onChangeHandler}
            value={formData.password}
          />
          <label htmlFor="Confirm Password"> Confirm Password</label>
          <input
            name="confirmPassword"
            onChange={onChangeHandler}
            value={formData.confirmPassword}
          />
          <br></br>
          <button type="submit"> Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpForm;
