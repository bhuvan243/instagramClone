export function relativeTime(timestamp) {
  const pastDate = new Date(timestamp);
  const currentDate = new Date();
  const timeDifference = currentDate - pastDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return years + " years";
  } else if (months > 0) {
    return months + " months";
  } else if (weeks > 0) {
    return weeks + " weeks";
  } else if (days > 0) {
    return days + " days";
  } else if (hours > 0) {
    return hours + " hours";
  } else if (minutes > 0) {
    return minutes + " minutes";
  } else {
    return seconds + " seconds";
  }
}
