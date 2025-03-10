import React from "react";
import Routing from "./utils/Routing";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-blend-color">
      <Nav/>
      <Routing />
      <Footer/>
      </div>
    </>
  );
}

export default App;
