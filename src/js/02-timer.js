import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const start = document.querySelector('[data-start]');
const daysOutput = document.querySelector('[data-days]');
const hoursOutput = document.querySelector('[data-hours]');
const minutesOutput = document.querySelector('[data-minutes]');
const secondsOutput = document.querySelector('[data-seconds]');
var inputDate, startTime;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputDate = new Date(selectedDates);
    if ((selectedDates[0] - new Date() < 0)) {
      start.disabled = true;
      window.alert("Please choose a date in the future");
    } else {
      start.disabled = false;
    }
  }
};

flatpickr("#datetime-picker", options);

start.addEventListener("click", () => {
  setInterval(() => {
    startTime = inputDate - new Date().getTime();
    convertMs(startTime);
  }, 1000);
 });

function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  daysOutput.innerHTML = addLeadingZero(days);
  hoursOutput.innerHTML = addLeadingZero(hours);
  minutesOutput.innerHTML = addLeadingZero(minutes);
  secondsOutput.innerHTML = addLeadingZero(seconds);
}