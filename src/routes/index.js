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
    main: () => (
      <div>
        <h2>Welcome to React!</h2> <br />
        <p>Be sure to close all tags!</p>
        <hr />
      </div>
    ),
  },
  {
    path: "/example7",
    main: () => (
      <div>Completed challenge!</div>
      // const MyComponent = function() {
      //   // Change code below this line
      //   return(
      //       <div>Completed challenge!</div>
      //   );
      //   // Change code above this line
      // }
    ),
  },
  {
    path: "/example8",
    main: () => (
      <div>
        <h1>Hello React!</h1>
      </div>
      // class MyComponent extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     // change code below this line
      //     return (
      //       <div>
      //        <h1>Hello React!</h1>
      //       </div>
      //     );
      //     // change code above this line
      //   }
      // }
    ),
  },
  {
    path: "/example9",
    main: () => (
      <div>
        <h1>I am the parent</h1>
        <div>
          <p>I am the child</p>
        </div>
      </div>
      // const ChildComponent = () => {
      //   return (
      //     <div>
      //       <p>I am the child</p>
      //     </div>
      //   );
      // }

      // class ParentComponent extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <h1>I am the parent</h1>
      //         { /* Change code below this line */ }

      //             <ChildComponent />
      //         { /* Change code above this line */ }
      //       </div>
      //     );
      //   }
      // }
    ),
  },
  {
    path: "/example10",
    main: () => (
      <div>
        <h1>Types of Food:</h1>
        <div>
          <div>
            <h2>Fruits:</h2>
            <ul>
              <li>Apples</li>
              <li>Blueberries</li>
              <li>Strawberries</li>
              <li>Bananas</li>
            </ul>
          </div>
        </div>
      </div>
      // const TypesOfFruit = () => {
      //   return (
      //     <div>
      //       <h2>Fruits:</h2>
      //       <ul>
      //         <li>Apples</li>
      //         <li>Blueberries</li>
      //         <li>Strawberries</li>
      //         <li>Bananas</li>
      //       </ul>
      //     </div>
      //   );
      // };

      // const Fruits = () => {
      //   return (
      //     <div>
      //       { /* Change code below this line */ }
      // <TypesOfFruit />
      //       { /* Change code above this line */ }
      //     </div>
      //   );
      // };

      // class TypesOfFood extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }

      //   render() {
      //     return (
      //       <div>
      //         <h1>Types of Food:</h1>
      //         { /* Change code below this line */ }
      //           <Fruits />
      //         { /* Change code above this line */ }
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  },
  {
    path: "/example11",
    main: () => 
    (<div></div>),
  }
];

export default routes;
