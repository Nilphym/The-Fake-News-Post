export const getFormattedDate = () => {
  const today = new Date();
  const month: string = today.getMonth().toString();
  const day: string = (today.getDate() + 1).toString();

  const date = `${today.getFullYear()}-${
    month.length === 1 ? `0${month}` : month
  }-${day.length === 1 ? `0${day}` : day}`;

  return date;
};
