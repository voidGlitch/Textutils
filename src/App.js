import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const [theme, settheme] = useState("white");

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const setcolor = (color) => {
    // if (document.body.style.backgroundColor === "blue" || "pink" || "green") {
    //   console.log("selected color " + document.body.style.backgroundColor);
    //   settheme(document.body.style.backgroundColor);
    // }
    if (mode === "light" && color === "default") {
      color = "white";
      settheme(color);
      console.log("here color is " + color);
      document.body.style.backgroundColor = "white";
    }
    if (mode === "dark" && color === "default") {
      color = "#2e363e";
      settheme(color);
      console.log(color);
      document.body.style.backgroundColor = "#2e363e";
    } else {
      document.body.style.backgroundColor = color;
    }
  };

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2e363e";
      showalert("dark mode has been enabled", "success");
      document.title = "Textutiles - Dark mode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="textutiles"
          about="about"
          mode={mode}
          toggle={toggle}
          theme={theme}
          setcolor={setcolor}
        />
        <Alert alert={alert} />
        {/* <Navbar /> */}
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <Textform
                title="Enter your text to analyse"
                mode={mode}
                showalert={showalert}
                theme={theme}
              />
            </Route>
            <Route exact path="/home">
              <Textform
                title="Enter your text to analyse"
                mode={mode}
                showalert={showalert}
                theme={theme}
              />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
