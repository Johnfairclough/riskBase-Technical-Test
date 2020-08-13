import React from "react";
import { Provider } from "react-redux";
import Products from "./Products";
import "./App.css";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1 className="Logo">Products<span className="Logo-Blue">R</span>Us</h1>
        </header>
        <h2 className="Title">Products for sale</h2>
        <hr />
        <Products />
      </div>
    </Provider>
  );
}

export default App;
