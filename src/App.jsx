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
const Content = (props) => {
  return (
    <>
      <p>
        {props.parts[0].partName} {props.parts[0].exercises}
      </p>
      <p>
        {props.parts[1].partName} {props.parts[1].exercises}
      </p>
      <p>
        {props.parts[2].partName} {props.parts[2].exercises}
      </p>
    </>
  );
};

// Total
function App() {
  const course = "Half Stack application development";
  const parts = [
    { partName: "Fundamentals of React", exercises: 10 },
    { partName: "Using props to pass data", exercises: 7 },
    { partName: "State of a component", exercises: 14 },
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
      <Content parts={parts} />
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  );
}

export default App;
