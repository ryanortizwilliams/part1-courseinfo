import { useState } from "react";
// TODO: make 3 components for header, content, and total

// Header
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

// Content

// Total
function App() {
  const course = "Half Stack application development";
  const parts = [
    { partName: "Fundamentals of React", exercises: 10 },
    { partName: "Using props to pass data", exercises: 10 },
  ];
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header course={course} />
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default App;
