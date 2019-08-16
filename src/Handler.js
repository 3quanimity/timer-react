import React, { Component } from "react";
import Timer from "./Timer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./timer.css";

export default class Handler extends Component {
  constructor() {
    super();
    this.state = {
      hr: 0,
      mn: 0,
      sec: 0,
      init: 0,
      button: "Start",
      condition: false
    };
    // this.condition = false;
    // this.button = "Start";

    setInterval(() => {
      if (this.state.condition) {
        // this.setState({ init: this.state.init + 1000 });
        this.msToTime(this.state.init + 1000);
      }
    }, 1000);
  }

  startPause = () => {
    this.setState({ condition: !this.state.condition });
    if (this.state.condition) this.setState({ button: "Start" });
    else this.setState({ button: "Pause" });
  };

  reset = () => {
    this.setState({ init: 0 });
    this.setState({ button: "Start" });
    this.setState({ condition: false });
    console.log(this.state.init);
    // this.condition = false;
    return this.msToTime(0);
  };

  msToTime = init => {
    console.log(this.state.init);

    var seconds = Math.floor((init / 1000) % 60),
      minutes = Math.floor((init / (1000 * 60)) % 60),
      hours = Math.floor((init / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    this.setState({ hr: hours, mn: minutes, sec: seconds, init: init });
  };

  // let time = msToTime(300000);

  render() {
    return (
      <React.Fragment>
        <div>
          <Timer hr={this.state.hr} mn={this.state.mn} sec={this.state.sec} />
        </div>
        <div className="card-body">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.startPause}
          >
            {this.state.button}
          </button>
          <button type="button" className="btn btn-light" onClick={this.reset}>
            Reset
          </button>
        </div>
      </React.Fragment>
    );
  }
}

// const Handler = () => {
//   const msToTime = duration => {
//     var seconds = Math.floor((duration / 1000) % 60),
//       minutes = Math.floor((duration / (1000 * 60)) % 60),
//       hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

//     hours = hours < 10 ? "0" + hours : hours;
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     return { hr: hours, mn: minutes, sec: seconds };
//   };

//   let time = msToTime(300000);

//   return (
//     <div>
//       <Timer hr={time.hr} mn={time.mn} sec={time.sec} />
//     </div>
//   );
// };

// export default Handler;
