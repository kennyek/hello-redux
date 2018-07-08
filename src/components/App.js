import React from "react";
import store from '../store';
import ButtonGroup from "./ButtonGroup";
import HelloWorld from "./HelloWorld";

const App = props => (
  <React.Fragment>
    <HelloWorld technology={store.getState().technology} />
    <ButtonGroup technologies={["React", "Elm", "React-redux"]} />
  </React.Fragment>
);

export default App;
