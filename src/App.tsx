import React from "react";
import "./App.css";
import { Header } from "./Header";
import { Main } from "./Main";
// require("dotenv").config();
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
