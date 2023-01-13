import React from 'react';
import ReactDOM from 'react-dom';


const time = new Date();
let greeting = "";
let style = { color: "black" };

export default function Greet() {
  if (5 <= time.getHours() && time.getHours() < 13) {
    greeting = "Good Morning";
    style.color = "green";
  } else if (13 <= time.getHours() && time.getHours() < 19) {
    greeting = "Good Afternoon";
    style.color = "teal";
  } else {
    greeting = "Good Evening see ya";
  }
  return (
    <>
      <div className="greeting_container">
        <h1>
          Netflix Says, <span className="greeting" style={style}>
            " {greeting} "
          </span>
        </h1>
      </div>
    </>
  );
}
