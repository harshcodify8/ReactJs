/**
 * <div id="parent">
 *    <div id = "child">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm h1 tag</h2>
 *   </div>
 *  <div id = "child2">
 *        <h1>I'm h1 tag</h1>
 *        <h2>I'm h1 tag</h2>
 *   </div>
 * </div>
 * ReactElement(Object) => HTML(Browser Understand)
 * While rednring into dom it converst into html
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am child h1 tag"),
    React.createElement("h2", {}, "I am child h2 tag"),
  ]),
]);
// key --> error);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Ronaldo is the goat!"
// );
// console.log(heading); // object
// const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
