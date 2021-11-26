import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import Alert from "./components/Alert";

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
    settheme(color);
    console.log("color is " + color);
    document.body.style.backgroundColor = color;
  };

  const toggle = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2e363e";
      showalert("dark mode has been enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title="textutiles"
        about="abouttext"
        mode={mode}
        toggle={toggle}
        theme={theme}
        setcolor={setcolor}
      />
      <Alert alert={alert} />
      {/* <Navbar /> */}
      <div className="container my-3">
        <Textform
          title="Enter your text to analyse"
          mode={mode}
          showalert={showalert}
          theme={theme}
        />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
