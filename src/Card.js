import React from "react";

export default function Card() {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h2 className="card-title">Dog</h2>
          <h3 className="card-subtitle mb-2 text-muted">Animal Kingdom</h3>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <button className="btn btn-primary">Submit</button>
        </div>
      </div>
    </>
  );
}
