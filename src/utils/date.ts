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
  const hour = date.toLocaleString('en-GB', { timeZone, hour: '2-digit' });
  const minute = date.toLocaleString('en-GB', { timeZone, minute: '2-digit' });

  let dateFormated;

  switch (format) {
    case 'dateAndTime':
      dateFormated = `${dayName}, ${day}/${month} ${hour}:0${minute}`;
      break;

    case 'dateNumbers':
      dateFormated = `${day}/${month} ${hour}:0${minute}`;
      break;

    case 'dateNames':
      dateFormated = `${dayName}, ${monthName} ${day}`;
      break;

    case 'dateHour':
      dateFormated = `${hour}:0${minute}`;
      break;

    default:
      dateFormated = date.toLocaleString('en-GB', { timeZone });
      break;
  }

  return dateFormated;
};

export { getDateByTimezone };
