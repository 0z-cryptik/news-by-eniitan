const timeFunc = (timeStamp) => {
  const oneMinute = 1000 * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  const tDate = new Date(timeStamp);
  const nDate = new Date();
  const diff = nDate - tDate;

  if (diff < oneMinute) {
    return "Less than a minute ago";
  } else if (diff < oneHour) {
    const minutesAgo = Math.round(diff / oneMinute);
    return `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else if (diff < oneDay) {
    const hoursAgo = Math.round(diff / oneHour);
    return `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  } else {
    const daysAgo = Math.round(diff / oneDay);
    return `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  }
};

export { timeFunc };
