export interface IDateFormat {
  format: 'dateAndTime' | 'dateNumbers' | 'dateNames' | 'dateHour';
  timestamp: number;
}

const getDateByTimezone = ({ timestamp, format }: IDateFormat) => {
  const date = new Date(timestamp);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const month = date.toLocaleString('en-GB', { timeZone, month: 'numeric' });
  const monthName = date.toLocaleString('en-GB', { timeZone, month: 'short' });
  const day = date.toLocaleString('en-GB', { timeZone, day: 'numeric' });
  const dayName = date.toLocaleString('en-GB', { timeZone, weekday: 'short' });
  const hourAndMinutes = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const dateFormated = {
    dateAndTime: `${dayName}, ${day}/${month} ${hourAndMinutes}`,
    dateNumbers: `${day}/${month} ${hourAndMinutes}`,
    dateNames: `${dayName}, ${monthName} ${day}`,
    dateHour: `${hourAndMinutes}`,
  }[format];

  return dateFormated || date.toLocaleString('en-GB', { timeZone });
};

export { getDateByTimezone };
