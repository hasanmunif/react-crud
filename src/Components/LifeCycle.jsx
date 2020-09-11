import React from "react";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 10
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return true;
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        count: this.state.count - 1
      });
    }, 1000);

    console.log(" componentDidMount");
  }
  shouldComponentUpdate(nexrProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    setTimeout(() => {
      this.setState({
        count: this.state.count - 1
      });
    }, 1000);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div>
        <h3 className="text-center bg-warning">{this.state.count}</h3>
      </div>
    );
  }
}

export default LifeCycle;
