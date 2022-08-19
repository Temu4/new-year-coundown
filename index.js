import calcRemainingTime from './calcRemainingTime.js';

const wrapper = document.getElementById('root');

let targetYear = new Date().getFullYear() + 1;

const renderInitialMarkup = () => {
  wrapper.innerHTML = `<p>Time left to <b id="targetYear"></b> New Year:</p>
                      <button id="increaseBtn">+</button>
                      <button id="decreaseBtn">-</button>
                      <h1 id="countdown"></h1>`;
};

document.addEventListener('DOMContentLoaded', () => {
  renderInitialMarkup();

  const yearWrapper = document.getElementById('targetYear');
  const countdownWrapper = document.getElementById('countdown');
  const increaseBtn = document.getElementById('increaseBtn');
  const decreaseBtn = document.getElementById('decreaseBtn');

  yearWrapper.innerText = targetYear;

  const changeYear = (value) => {
    targetYear += value;
    yearWrapper.innerText = targetYear;
  };

  increaseBtn.addEventListener('click', () => changeYear(1));
  decreaseBtn.addEventListener('click', () => changeYear(-1));

  setInterval(() => {
    const {diffInYears, diffInDays, diffInHours, diffInMinutes, diffInSeconds} =
      calcRemainingTime(targetYear);

    countdownWrapper.innerText = `${diffInYears} years, ${diffInDays} days, ${diffInHours} hours, ${diffInMinutes} minutes, ${diffInSeconds} sec`;
  }, 1000);
});
