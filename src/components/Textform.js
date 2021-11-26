import React, { useState } from "react";

export default function Textform(props) {
  const [text, settext] = useState("");

  const handleclicked = () => {
    console.log("uppercase was clicked " + text);
    let newText = text.toUpperCase();
    settext(newText);
    props.showalert("Converted to uppercase !", "success");
  };
  const handleloclicked = () => {
    console.log("lowercase was clicked " + text);
    let newText = text.toLowerCase();
    settext(newText);
    props.showalert("Converted to lowercase !", "success");
  };
  const handleclearclicked = () => {
    console.log("clear was clicked ");
    const newtext = "";
    settext(newtext);
    props.showalert("Text has been cleared !", "success");
  };
  const removeExtraspace = () => {
    console.log("Remove was used");
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" ")); //text having in the value /state + the text we type from ourselves
    props.showalert("Extra spaces has been removed !", "success");
  };
  const copytext = () => {
    console.log("copy was used");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("copied to clipboard !", "success");
  };
  const handleonChange = (event) => {
    console.log("Onchanged");
    settext(event.target.value); //text having in the value /state + the text we type from ourselves
  };

  return (
    <>
      <div
        style={{
          backgroundColor:
            props.mode === "dark" || props.theme === "green" || "blue" || "pink"
              ? "dark"
              : "white",
          color: props.mode === "dark" ? "white" : "#0f2b54",
        }}
      >
        <h1>{props.title}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            onChange={handleonChange}
            value={text}
            placeholder="Type something..."
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={handleclicked}
          style={{
            backgroundColor:
              props.mode === "dark" ||
              props.theme === "green" ||
              "blue" ||
              "pink"
                ? `light${props.theme}`
                : "white",
            color: props.mode === "dark" ? "white" : "#0f2b54",
          }}
        >
          convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleloclicked}
          style={{
            backgroundColor:
              props.mode === "dark" ||
              props.theme === "green" ||
              "blue" ||
              "pink"
                ? `light${props.theme || props.mode}`
                : "blue",
            color: props.mode === "dark" ? "white" : "#0f2b54",
          }}
        >
          convert to Lowercase
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleclearclicked}
          style={{
            backgroundColor:
              props.mode === "dark" ||
              props.theme === "green" ||
              "blue" ||
              "yellow"
                ? `light${props.theme}`
                : "white",
            color: props.mode === "dark" ? "white" : "#0f2b54",
          }}
        >
          Clear text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={copytext}
          style={{
            backgroundColor:
              props.mode === "dark" ||
              props.theme === "green" ||
              "blue" ||
              "yellow"
                ? `light${props.theme}`
                : "white",
            color: props.mode === "dark" ? "white" : "#0f2b54",
          }}
        >
          copy the text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={removeExtraspace}
          style={{
            backgroundColor:
              props.mode === "dark" ||
              props.theme === "green" ||
              "blue" ||
              "yellow"
                ? `light${props.theme}`
                : "white",
            color: props.mode === "dark" ? "white" : "#0f2b54",
          }}
        >
          remove extra spaces
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor:
            props.mode === "dark" || props.theme === "green" || "blue" || "pink"
              ? `dark`
              : "white",
          color: props.mode === "dark" ? "white" : "#0f2b54",
        }}
      >
        <h1>Your Text Summary</h1>
        <p
          style={{
            color:
              text.length === 0
                ? "grey"
                : `${props.mode === "dark" ? "white" : "black"}`,
          }}
        >
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p
          style={{
            color:
              text.length === 0
                ? "grey"
                : `${props.mode === "dark" ? "white" : "black"}`,
          }}
        >
          {0.008 * text.split(" ").length} minutes read
        </p>
        <h2>Preview</h2>
        <p
          style={{
            color:
              text.length === 0
                ? "grey"
                : `${props.mode === "dark" ? "white" : "black"}`,
          }}
        >
          {text.length > 0
            ? text
            : "Enter something in textarea to preview here"}
        </p>
      </div>
    </>
  );
}
