const routes = [
  {
    path: "/example1",
    exact: true,
    main: () => <h1>Hello JSX!</h1>,
  },
  {
    path: "/example2",
    main: () => (
      <div>
        <h1></h1>
        <p></p>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    ),
  },
  {
    path: "/example3",
    main: () => (
      <div>
        {/* */}
        <h1>This is a block of JSX</h1>
        <p>Here's a subtitle</p>
      </div>
    ),
  },
  {
    path: "/example4",
    main: () => (
      <div id="challenge-node">
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
      </div>
    ),

    // const JSX = (
    //   <div id="challenge-node">
    //     <h1>Hello World</h1>
    //     <p>Lets render this to the DOM</p>
    //   </div>
    // );
    // // Change code below this line
    // ReactDOM.render(JSX, document.getElementById("challenge-node")),
  },
  {
    path: "/example5",
    main: () => (
      <div className="myDiv">
        <h1>Add a class to this div</h1>
      </div>
    ),
  },
  {
    path: "/example6",
    main: () => <h2>Shoelaces</h2>,
  },
];

export default routes;
