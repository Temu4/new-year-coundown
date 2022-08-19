import moment from './node_modules/moment/dist/moment.js';

const wrapper = document.getElementById('root');

const currentYear = moment().year();
const nextNewYear = moment(`${currentYear + 1}`);

const calcRemainingTime = (targetDate) => {
  const todayDate = moment();

  const diffInDays = targetDate.diff(todayDate, 'd');

  // moment.add() mutates initial date
  todayDate.add(diffInDays, 'd');

  const diffInHours = targetDate.diff(todayDate, 'h');

  todayDate.add(diffInHours, 'h');

  const diffInMinutes = targetDate.diff(todayDate, 'm');

  todayDate.add(diffInMinutes, 'm');

  const diffInSeconds = targetDate.diff(todayDate, 's');

  return {diffInDays, diffInHours, diffInMinutes, diffInSeconds};
};

setInterval(() => {
  const {diffInDays, diffInHours, diffInMinutes, diffInSeconds} = calcRemainingTime(nextNewYear);

  wrapper.innerHTML = `<p>Time left to New Year:</p><h1>${diffInDays} days, ${diffInHours} hours, ${diffInMinutes} minutes, ${diffInSeconds} sec</h1>`;
}, 1000);
