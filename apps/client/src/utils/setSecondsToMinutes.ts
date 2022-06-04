export const setSecondsToMinutes = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  const timeString = `${minutes ? `${minutes} min` : '0 min'} ${
    secs ? `${secs} seconds` : '0 seconds'
  } `;
  return timeString;
};
