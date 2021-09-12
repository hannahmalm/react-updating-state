// Code ClickityClick Component Here
//React component can have initial state, the real power is in updating its state 
//State is only reserved for data that changes in our component and is visible in the UI.
//IF THE STATE DOES NOT CHANGE DO NOT HAVE A STATE
//use this.setState() to modify the state allows us to let React know that the component state has changed
//setting state is not synchronous
//State updates, however, are batched internally and then executed simultaneously whenever React feels it's appropriate
//

import React from "react";

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
    console.log(this.state.hasBeenClicked); 
  }
//If we updated the hasBeenClicked using this.setState() like we did above, it would merge the new state with the existing state, resulting in this new state
  //To update our state, we use this.setState() and pass in an object.
  //One super important thing to note is that it only merges things on the first level.
  //If we want to access our new state after it has been updated, we can optionally add a callback as a second argument to the this.setState() function.
  handleClick = () => {
    this.setState({
      hasBeenClicked: true
    }, () => console.log(this.state.hasBeenClicked)) // prints true
  }

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : "not"} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;

//Changes in Props vs Changes in State
//changes in state can only happen internally due to components changing their own state
//A component cannot change its props. Changes in props can only happen externally, meaning the parent or grandparent component changes the values it passing down to its children.
//it is important to note that we should not use this.state inside of setState.

// import React from "react";

// class LightSwitch extends React.Component {
//   constructor() {
//     super();

//     // Initial state is defined
//     this.state = {
//       toggled: false,
//     };
//   }

//   // when handleClick is called, setState will update the state so that toggle is reversed
//   handleClick = () => {
//     this.setState((previousState) => {
//       return {
//         toggled: !previousState.toggled,
//       };
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>
//           {this.state.toggled ? "ON" : "OFF"}
//         </button>
//       </div>
//     );
//   }
// }

// export default LightSwitch;

