export const getDate = (dateAndTime: string) => {
  const date = new Date(dateAndTime);
  // Get date components
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getDate();
  // Get time components
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const dateData = {
    day: day,
    month: month.toString().substring(0,4),
    time: `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}`,
  };
  return dateData;
};
