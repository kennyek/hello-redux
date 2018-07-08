import React, { Component } from "react";
import store from '../store/store';
import HelloWorld from "./HelloWorld";

class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
