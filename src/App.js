import logo from "./logo.svg";
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
