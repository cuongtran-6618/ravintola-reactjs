/*
import "./App.css";

import DessertsList from "./DessertsList";
import { useState } from "react";
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const [start, setStart] = useState("5");
  const [comments, setComments] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (start <= 2 || comments === undefined || comments === "") {
      alert("why?");
      return null;
    }

    console.log("formSubmit success");
  };

  return (
    <div className="App">
      <DessertsList data={desserts} />
      <form onSubmit={onSubmit}>
        <label htmlFor="start">Star {start} </label>
        <input
          id="start"
          type="range"
          min="0"
          max="5"
          onChange={(e) => setStart(e.target.value)}
        />
        <label htmlFor="comment">Comment</label>
        <textarea
          id="comment"
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
        <button type="submit">Submit form</button>
      </form>
    </div>
  );
}

export default App;
*/

import "./App.css";
import { useState } from "react";
import { validateEmail } from "./utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    // Implement this function
    if (firstName === "" || firstName === undefined) {
      return false;
    }

    if (email === "" || email === undefined || validateEmail(email) === false) {
      return false;
    }

    if (
      password === "" ||
      password === undefined ||
      password.value.length < 8
    ) {
      return false;
    }

    if (role === "" || role === undefined || role === "role") {
      return false;
    }

    return true;
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setEmail("");
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              placeholder="Password"
              value={password.value}
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
