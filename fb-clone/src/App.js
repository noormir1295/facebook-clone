import React from "react";
import Header from "./header";
import "./App.css";
import Sidebar from "./Sidebar";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        {/* feed */}
        {/* Widgets */}
      </div>
    </div>
  );
}

export default App;

