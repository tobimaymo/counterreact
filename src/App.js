import React from "react";
import "./styles.css";
import ItemListContainer from "./components/ItemListContainer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ItemListContainer />
      </div>
    );
  }
}

export default App;
