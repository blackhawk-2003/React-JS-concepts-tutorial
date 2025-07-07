import { DEFAULT_SERIF_FONT } from "next/dist/shared/lib/constants";
import { Component } from "react";

//Nothing of this will be use in any project only functional components and

class ClassBasedComponent extends Component {
  //state management in class based components

  state = {
    showText: false,
    changeColor: false,
    count: 0,
  };

  handleClick = () => {
    const { changeColor, showText } = this.state;
    this.setState({ showText: !showText, changeColor: !changeColor });
    //direct toggling is not recommended as it will not re render the component
  };

  handleCount = () => {
    this.setState({ ...this.state, count: this.state.count + 1 });
  };

  //This are all used to manage side effects

  //componentDidMount
  componentDidMount() {
    //Anything that we want to do on page load we can do it here
    console.log("this is called first time on page load");
    this.setState({
      showText: !this.state.showText,
      changeColor: !this.state.changeColor,
    });
  }
  //componentDidUpdate
  componentDidUpdate(prevProps, prevState) {
    console.log(prevState);
    //if we want to do something when state changes we can do it here
    //for example lets reset the count when it reaches ten
    if (prevState.count === 9) {
      this.setState({ count: 0 });
    }
    console.log("this is called every time when state changes");
  }
  //componentWillUnmount
  componentWillUnmount() {
    //this is called when component is about to be removed from the dom
    console.log(
      "this is called when component is about to be removed from the dom"
    );
  }
  render() {
    console.log(this.state);
    const { showText, changeColor, count } = this.state;
    return (
      <div>
        {showText ? (
          <h3 style={{ color: changeColor ? "red" : "black" }}>
            This is a class based component
          </h3>
        ) : null}

        <button style={{ marginRight: "20px" }} onClick={this.handleClick}>
          Toggle Text
        </button>
        <h3>The count is {count}</h3>
        <button onClick={this.handleCount}>Increase Count Value</button>
      </div>
    );
  }
}

export default ClassBasedComponent;
