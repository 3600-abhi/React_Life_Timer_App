import { useState } from "react";
import "./Homepage.css";

const Homepage = () => {
  //   let visibility = true;
  const [age, setAge] = useState({});
  let DOB = 0;

  const handleIconClick = () => {
    const inputElement = document.getElementById("input_id");
    const buttonElement = document.getElementById("button_id");

    // Below are 3 method to (hide and show) the HTML Element...........

    // Method: 1............
    // if (!visibility) {
    //   inputElement.classList.add("hide");
    //   buttonElement.classList.add("hide");
    // }
    // else {
    //     inputElement.classList.remove("hide");
    //     buttonElement.classList.remove("hide");
    // }
    // visibility = !visibility;

    // Method: 2 ............................
    // iske alawa hum toggle ka use kr skte hain
    // toggle agr nhi hoga to lga dega aur lga hoga to hta dega
    inputElement.classList.toggle("hide");
    buttonElement.classList.toggle("hide");

    //Method: 3.....................
    // if(visibility) {
    //     inputElement.style.display = "none";
    //     buttonElement.style.display = "none";
    // }
    // else {
    //     inputElement.style.display = "";
    //     buttonElement.style.display = "";
    // }
    // visibility = !visibility;
  };

  const handleDOBSelection = () => {
    const inputElement = document.getElementById("input_id");
    DOB = new Date(inputElement.value);
  };

  const calculateAndSetAge = () => {
    const currDate = new Date();
    const dateDifference = currDate - DOB;
    const years = Math.floor(dateDifference / (1000 * 60 * 60 * 24 * 365));
    const months =
      Math.floor((dateDifference / (1000 * 60 * 60 * 24 * 365)) % 12);
    const days = Math.floor(dateDifference / (1000 * 60 * 60 * 24)) % 30;
    const hours = Math.floor(dateDifference / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(dateDifference / (1000 * 60)) % 60;
    const seconds = Math.floor(dateDifference / 1000) % 60;
    // console.log(years, months, days, hours, minutes, seconds);
    setAge({ years, months, days, hours, minutes, seconds });
  };

  const handleSubmit = () => {
    const enterDOBHeadingContainerElement = document.getElementById(
      "enterDOBHeadingContainerId"
    );
    const headingTimerContainerElement = document.getElementById(
      "headingTimerContainerId"
    );
    enterDOBHeadingContainerElement.classList.toggle("hide");
    headingTimerContainerElement.classList.toggle("hide");

    calculateAndSetAge();

    setInterval(calculateAndSetAge, 1000);
  };

  return (
    <div className="homepage_container">
      <div
        className="enter_dob_heading_container"
        id="enterDOBHeadingContainerId"
      >
        Kindly Enter Your Date Of Birth
      </div>

      <div
        className="heading_and_time_container hide"
        id="headingTimerContainerId"
      >
        <div className="life_heading_container">
          How Much Life Journey Covered, Till Now
        </div>

        <div className="time_container">
          <div className="year_container">
            <h1 className="text_white">{age.years}</h1>
            <h1>Years</h1>
          </div>

          <div className="months_container">
            <h1 className="text_white">{age.months}</h1>
            <h1>Months</h1>
          </div>

          <div className="days_container">
            <h1 className="text_white">{age.days}</h1>
            <h1>Days</h1>
          </div>

          <div className="hours_container">
            <h1 className="text_white">{age.hours}</h1>
            <h1>Hours</h1>
          </div>

          <div className="minutes_container">
            <h1 className="text_white">{age.minutes}</h1>
            <h1>Minutes</h1>
          </div>

          <div className="seconds_container">
            <h1 className="text_white">{age.seconds}</h1>
            <h1>Seconds</h1>
          </div>
        </div>
      </div>

      <div className="icon_and_input_container">
        <div className="icon_container" onClick={handleIconClick}>
          <i class="fa-solid fa-gear"></i>
        </div>

        <div className="input_container">
          <input
            id="input_id"
            type="date"
            className="hide"
            onChange={handleDOBSelection}
          />
        </div>

        <div className="button_container">
          <button id="button_id" className="hide" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
