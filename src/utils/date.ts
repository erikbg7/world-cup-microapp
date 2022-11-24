export interface IDateFormat {
  format: 'dateAndTime' | 'dateNumbers' | 'dateNames' | 'dateHour' | 'dateHHHHDDMM' | 'dateDay';
  timestamp: number;
}

const getDateByTimezone = ({ timestamp, format }: IDateFormat) => {
  const date = new Date(timestamp);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  const month = date.toLocaleString('en-GB', { timeZone, month: 'numeric' });
  const monthName = date.toLocaleString('en-GB', { timeZone, month: 'short' });
  const day = date.toLocaleString('en-GB', { timeZone, day: 'numeric' });
  const dayName = date.toLocaleString('en-GB', { timeZone, weekday: 'short' });
  const hourAndMinutes = date.toLocaleTimeString(['en-GB'], {
    timeZone,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const dateFormated = {
    dateAndTime: `${dayName}, ${day}/${month} ${hourAndMinutes}`,
    dateNumbers: `${day}/${month} ${hourAndMinutes}`,
    dateNames: `${dayName}, ${monthName} ${day}`,
    dateHour: `${hourAndMinutes}`,
    dateHHHHDDMM: `${hourAndMinutes} · ${day} ${monthName}`,
    dateDay: `${day}`,
  }[format];

  return dateFormated || date.toLocaleString('en-GB', { timeZone });
};

const isToday = (timestamp: number) => {
  const today = new Date();
  const date = new Date(timestamp);
  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth();
};

export { getDateByTimezone, isToday };
