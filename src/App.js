import React from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css"; // Import Bootstrap CSS

function App() {
  return (
    <div className="container">
      <h1>Hi, I am working on the SCSS Project</h1>
      <Card />
      <hr />
      <span className="color-one">One</span> 
      <span className="color-two">Two</span> 
      <span className="color-three">Three</span> 
      <span className="color-four text-hover-four-4">Four</span> 
      <span className="color-five">Five</span> 
      <span className="color-six">Six</span> 
      <hr />
      <span className="color-dark-one-3 text-hover-one-1">One</span> 
      <span className="color-dark-one-2">Two</span> 
      <span className="color-dark-one-1">Three</span> 
      <span className="color-light-one-4">Four</span> 
      <span className="color-light-one-5">Five</span> 
      <span className="color-light-one-6">Six</span> 
      <br/>
      <button className="button">Click Me</button>
      <button className="button-function">Functional Button</button>
    </div>
  );
}

export default App;
