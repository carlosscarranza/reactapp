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
    main: () => (
      <div></div>
      // class Fruits extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <h2>Fruits:</h2>
      //         <NonCitrus />
      //         <Citrus />
      //       </div>
      //     );
      //   }
      // };

      // class TypesOfFood extends React.Component {
      //   constructor(props) {
      //      super(props);
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <h1>Types of Food:</h1>
      //         <Fruits />
      //         <Vegetables />
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example12",
    main: () => (
      <div></div>
      // class TypesOfFood extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <h1>Types of Food:</h1>
      //         {/* change code below this line */}
      //         <Fruits />
      //         <Vegetables />
      //         {/* change code above this line */}
      //       </div>
      //     );
      //   }
      // };

      // // change code below this line
      // ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
    ),
  },
  {
    path: "/example13",
    main: () => (
      <div id="challenge-node">
        <h1>My First React Component!</h1>
      </div>
      //// change code below this line
      // class MyComponent extends React.Component{
      //   constructor(props){
      //     super(props);
      //   }
      //   render(){
      //     return(
      //           <div id="challenge-node">
      //                 <h1>My First React Component!</h1>
      //           </div>
      //     );
      //   }
      // };
      // ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));
    ),
  },
  {
    path: "/example14",
    main: () => (
      <div>
        <h3>What date is it?</h3>
        <div>
          <p>The current date is: {Date()}</p>
        </div>
      </div>
      // const CurrentDate = (props) => {
      //   return (
      //     <div>
      //       <p>The current date is: {props.date}</p>
      //     </div>
      //   );
      // };

      // class Calendar extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <h3>What date is it?</h3>
      //         <CurrentDate date={Date()} />
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example15",
    main: () => (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <p>{["Walk", "Cook", "Bake"].join(", ")}</p>
        <h2>Tomorrow</h2>
        <p>{["Study", "Code", "Eat"].join(", ")}</p>
      </div>
      // const List = props => {
      //   return <p>{props.tasks.join(", ")}</p>;
      // };

      // class ToDo extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <h1>To Do Lists</h1>
      //         <h2>Today</h2>
      //         <List tasks={["Walk", "Cook", "Bake"]} />
      //         <h2>Tomorrow</h2>
      //         <List tasks={["Study", "Code", "Eat"]} />
      //       </div>
      //     );
      //   }
      // }
    ),
  },
  {
    path: "/example16",
    main: () => (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
      // const ShoppingCart = (props) => {
      //   return (
      //     <div>
      //       <h1>Shopping Cart Component</h1>
      //     </div>
      //   )
      // };
      // // Change code below this line
      // ShoppingCart.defaultProps = { items: 0 }
    ),
  },
  {
    path: "/example17",
    main: () => (
      <h1>Current Quantity of Items in Cart: {10}</h1>
      // const Items = (props) => {
      //   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
      // }

      // Items.defaultProps = {
      //   quantity: 0
      // }

      // class ShoppingCart extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     { /* Change code below this line */ }
      //     return <Items quantity={10}/>
      //     { /* Change code above this line */ }
      //   }
      // };
    ),
  },
  {
    path: "/example18",
    main: () => (
      <h1>Current Quantity of Items in Cart: {0}</h1>
      // const Items = (props) => {
      //   return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
      // };

      // // Change code below this line
      // Items.propTypes = {
      //   quantity: PropTypes.number.isRequired
      // };
      // // Change code above this line

      // Items.defaultProps = {
      //   quantity: 0
      // };

      // class ShoppingCart extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     return <Items />
      //   }
      // };
    ),
  },
  {
    path: "/example19",
    main: () => (
      <div>
        <h2>Reset Password</h2>
        <h3>We've generated a new temporary password for you.</h3>
        <h3>Please reset this password from your account settings ASAP.</h3>
        {/* Change code below this line */}
        <p>
          Your temporary password is: <strong>xxxxxxxx</strong>
        </p>
        {/* Change code above this line */}
      </div>
      // class ReturnTempPassword extends React.Component {
      //   constructor(props) {
      //     super(props);

      //   }
      //   render() {
      //     return (
      //         <div>
      //             { /* Change code below this line */ }
      //                <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
      //             { /* Change code above this line */ }
      //         </div>
      //     );
      //   }
      // };

      // class ResetPassword extends React.Component {
      //   constructor(props) {
      //     super(props);

      //   }
      //   render() {
      //     return (
      //         <div>
      //           <h2>Reset Password</h2>
      //           <h3>We've generated a new temporary password for you.</h3>
      //           <h3>Please reset this password from your account settings ASAP.</h3>
      //           { /* Change code below this line */ }
      //             <ReturnTempPassword tempPassword="xxxxxxxx" />
      //           { /* Change code above this line */ }
      //         </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example20",
    main: () => (
      <div>CamperBot</div>
      // class CampSite extends React.Component {
      //   constructor(props) {
      //     super(props);
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <Camper/>
      //       </div>
      //     );
      //   }
      // };
      // // Change code below this line
      // const Camper = props => <p>{props.name}</p>;

      // Camper.defaultProps = {
      //   name: "CamperBot"
      // };

      // Camper.propTypes = {
      //   name: PropTypes.string.isRequired
      // };
    ),
  },
  {
    path: "/example21",
    main: () => (
      <div>
        <h1>Name</h1>
      </div>
      // class StatefulComponent extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     // initialize state here

      //     this.state = {
      //       name : "Name"
      //     }

      //   }
      //   render() {
      //     return (
      //       <div>
      //         <h1>{this.state.name}</h1>
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example22",
    main: () => (
      <h1>freeCodeCamp</h1>
      // class MyComponent extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       name: 'freeCodeCamp'
      //     }
      //   }
      //   render() {
      //     return (
      //       <div>
      //         { /* Change code below this line */ }
      //           <h1>{this.state.name}</h1>
      //         { /* Change code above this line */ }
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example23",
    main: () => (
      <h1>freeCodeCamp</h1>
      // class MyComponent extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       name: 'freeCodeCamp'
      //     }
      //   }
      //   render() {
      //     // change code below this line
      //     const name = this.state.name;
      //     // change code above this line
      //     return (
      //       <div>
      //         { /* change code below this line */ }
      //           <h1>{name}</h1>
      //         { /* change code above this line */ }
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example24",
    main: () => (
      <div>
        <button>Click Me</button>
        <h1>React Rocks!</h1>
      </div>

      // class MyComponent extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       name: 'Initial State'
      //     };
      //     this.handleClick = this.handleClick.bind(this);
      //   }
      //   handleClick() {
      //     // change code below this line
      //     this.setState({
      //       name: 'React Rocks!'
      //     });
      //     // change code above this line
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <button onClick={this.handleClick}>Click Me</button>
      //         <h1>{this.state.name}</h1>
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example25",
    main: () => (
      <div>
        <button>Click Me</button>
        <h1>You clicked!</h1>
      </div>
      // class MyComponent extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       text: "Hello"
      //     };
      //     this.handleClick = this.handleClick.bind(this);
      //   }
      //   handleClick() {
      //     this.setState({
      //       text: "You clicked!"
      //     });
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <button onClick = {this.handleClick}>Click Me</button>
      //         <h1>{this.state.text}</h1>
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example26",
    main: () => (
      <div>
        <button>Click Me</button>
        <h1>Now you see me!</h1>
      </div>
      // class MyComponent extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       visibility: false
      //     };
      //     this.toggleVisibility = this.toggleVisibility.bind(this);
      //    }
      //   toggleVisibility() {
      //     this.setState(state => ({
      //       visibility: !state.visibility
      //     }));
      //   }
      //   render() {
      //     if (this.state.visibility) {
      //       return (
      //         <div>
      //           <button onClick = {this.toggleVisibility}>Click Me</button>
      //           <h1>Now you see me!</h1>
      //         </div>
      //       );
      //     } else {
      //       return (
      //         <div>
      //           <button onClick = {this.toggleVisibility}>Click Me</button>
      //         </div>
      //       );
      //     }
      //   }
      // };
    ),
  },
  {
    path: "/example27",
    main: () => (
      <div>
        <button className="inc">Increment!</button>
        <button className="dec">Decrement!</button>
        <button className="reset">Reset</button>
        <h1>Current Count: 0</h1>
      </div>
      // class Counter extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       count: 0
      //     };
      //   this.increment = this.increment.bind(this);
      //   this.decrement = this.decrement.bind(this);
      //   this.reset = this.reset.bind(this);
      //  }
      //   reset() {
      //     this.setState({
      //       count: 0
      //     });
      //   }
      //   increment() {
      //     this.setState(state => ({
      //       count: state.count + 1
      //     }));
      //   }
      //   decrement() {
      //     this.setState(state => ({
      //       count: state.count - 1
      //     }));
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <button className='inc' onClick={this.increment}>Increment!</button>
      //         <button className='dec' onClick={this.decrement}>Decrement!</button>
      //         <button className='reset' onClick={this.reset}>Reset</button>
      //         <h1>Current Count: {this.state.count}</h1>
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example28",
    main: () => (
      <div>
        {/* Change code below this line */}
        <input />
        {/* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p></p>
      </div>
      // class ControlledInput extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       input: ''
      //     };
      //   }
      //   // Change code below this line
      //   handleChange(event) {
      //       this.setState({
      //         input: event.target.value
      //       });
      //   }
      //   // Change code above this line
      //   render() {
      //     return (
      //       <div>
      //         { /* Change code below this line */}
      //           <input value = {this.state.input} onChange = {this.handleChange.bind(this)}/>
      //         { /* Change code above this line */}
      //         <h4>Controlled Input:</h4>
      //         <p>{this.state.input}</p>
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example29",
    main: () => (
      <div>
        <form>
          <input />
          <button type="submit">Submit!</button>
        </form>
        <h1></h1>
      </div>
      // class MyForm extends React.Component {
      //   constructor(props) {
      //     super(props);
      //     this.state = {
      //       input: '',
      //       submit: ''
      //     };
      //     this.handleChange = this.handleChange.bind(this);
      //     this.handleSubmit = this.handleSubmit.bind(this);
      //   }
      //   handleChange(event) {
      //     this.setState({
      //       input: event.target.value
      //     });
      //   }
      //   handleSubmit(event) {
      //     event.preventDefault()
      //     this.setState({
      //       submit: this.state.input
      //     });
      //   }
      //   render() {
      //     return (
      //       <div>
      //         <form onSubmit={this.handleSubmit}>
      //           <input
      //             value={this.state.input}
      //             onChange={this.handleChange} />
      //           <button type='submit'>Submit!</button>
      //         </form>
      //         <h1>{this.state.submit}</h1>
      //       </div>
      //     );
      //   }
      // };
    ),
  },
  {
    path: "/example30",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
  {
    path: "/example20",
    main: () => <div></div>,
  },
];

export default routes;
