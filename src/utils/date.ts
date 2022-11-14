const getDateByTimezone = (timestamp: number) => {
  const date = new Date(timestamp);
  const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return date.toLocaleString('en-GB', { timeZone });
};

export { getDateByTimezone };
