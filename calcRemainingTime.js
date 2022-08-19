import moment from './node_modules/moment/dist/moment.js';

const calcRemainingTime = (targetYear) => {
  const todayDate = moment();
  const targetDate = moment(targetYear.toString());

  const diffInYears = targetDate.diff(todayDate, 'y');

  // moment.add() mutates initial date
  todayDate.add(diffInYears, 'y');

  const diffInDays = targetDate.diff(todayDate, 'd');

  todayDate.add(diffInDays, 'd');

  const diffInHours = targetDate.diff(todayDate, 'h');

  todayDate.add(diffInHours, 'h');

  const diffInMinutes = targetDate.diff(todayDate, 'm');

  todayDate.add(diffInMinutes, 'm');

  const diffInSeconds = targetDate.diff(todayDate, 's');

  return {diffInYears, diffInDays, diffInHours, diffInMinutes, diffInSeconds};
};

export default calcRemainingTime;
