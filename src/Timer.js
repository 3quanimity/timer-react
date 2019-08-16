import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./timer.css";

function Timer(props) {
  return (
    <div className="container mt-3">
      <div class="card" style={{ width: "18rem" }}>
        <div className="timer">
          <div class="nums">
            <h1>
              {props.hr}:{props.mn}:{props.sec}
            </h1>
          </div>

          <div class="tags">
            <h2>Hours</h2>
            <h2>Minutes</h2>
            <h2>Seconds</h2>
          </div>
        </div>

        <div class="card-body">
          <button type="button" class="btn btn-primary">
            Start
          </button>
          <button type="button" class="btn btn-light">
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Timer;
