import React from "react";
import Timer from "./Timer";

const Handler = () => {
  const msToTime = duration => {
    var seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    return { hr: hours, mn: minutes, sec: seconds };
  };

  let time = msToTime(900000);

  return (
    <div>
      <Timer hr={time.hr} mn={time.mn} sec={time.sec} />
    </div>
  );
};

export default Handler;
