import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Violations from "./components/Violations";
// import 'rsuite/dist/rsuite.min.css';

function App() {
  return (
    <div className="App flex">
      <Sidebar />
      <div className="w-full">
        <div className="w-full">
          <Navbar />
        </div>
        <Violations />
      </div>

    </div>
  );
}

export default App;
