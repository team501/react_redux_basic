import React, { Component } from 'react';
// import { createStore } from 'redux';
import './App.css';
// import reducer from "./reducers";
import HelloWorld from './components/HelloWorld/HelloWorld';
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import { store } from "./store";

class App extends Component {
// state = {
//   tech: "Redux"
// }

  render() {
    return [
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ];
  }
}

export default App;
