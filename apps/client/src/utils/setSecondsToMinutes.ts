export const setSecondsToMinutes = (seconds: number) => {
  let timeString: string;

  let minutes = Math.floor(seconds / 60);
  let secs = seconds % 60;

  timeString = `${minutes ? `${minutes} min` : '0 min'} ${
    secs ? `${secs} seconds` : '0 seconds'
  } `;
  return timeString;
};
