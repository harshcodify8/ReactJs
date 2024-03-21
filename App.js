import React from "react";
import ReactDOM from "react-dom/client";
const elem = <span>React Element</span>;
const Title1 = function () {
  return (
    <h1 className="head" tabIndex="1">
      Yoooo!!
    </h1>
  );
};
const Title = () => (
  <h1 className="head" tabIndex="1">
    {elem}
    Yoo!!
  </h1>
);
//React Element
// const heading = (
//   <h1 className="head" tabIndex="5">
//     Ronaldooooooo siuuuuuu!!!
//   </h1>
// );
const jsxHeading = (
  <h1 id="heading" className="head" tabIndex="1">
    IDK!!
  </h1>
);
// const data = api.getData();

//React Component

// const HeadingComponent = () => {
//   return <h1 className="heading">Ronaldo is the goat</h1>;
// };
const number = 1000;
const HeadingComponent = () => (
  <div id="container">
    {jsxHeading}
    <h2>{number}</h2>
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Ronaldo is the goat</h1>
  </div>
);
//{ISKA ANDHAR KOI BI JAVASCRIPT LIKH SKTA HA}
// This is component composition jab hum ek comoponent ko dsura m dalte a
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent />);
