import React from "react";

import Header from "./Header";
import Main from "./Main";
import Projects from "./Projects";
import Footer from "./Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="Container">
        <Header />
        <main>
          <Main />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
