import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function SignInForm() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    
    // console.log(formValues);
    axios(configuration)
      .then((result) => {
        alert("Signed in succesfully")
        console.log(result);
        setIsSubmit(true);

        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });

        alert('Signed in as '+result.data.name);

      })
      .catch((error) => {
        error = new Error();
        console.log(error);
        alert("wrong credentials")
      });
    // setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // if (!values.username) {
    //   errors.username = "Username is required!";
    // }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  const configuration = {
    method: "post",
    url: "http://localhost:3001/login",
    data: formValues,
  };

// change container to containerSign

  return (
    <div className="containerSign"> 
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed Up successfully</div>
      ) : (
        <pre></pre>
      )} */}

      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            {/* <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            /> */}
          </div>
          {/* <p>{formErrors.username}</p> */}
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              className = "fieldBox"
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              className = "fieldBox"
            />
          </div>
          <p>{formErrors.password}</p>
          <button className="ui button">Submit</button>
        </div>
      </form>
    </div>
  );
}


// change fluid ui button blue to ui button
export default SignInForm;