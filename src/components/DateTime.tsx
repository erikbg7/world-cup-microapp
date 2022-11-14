import React from 'react';
import clsx from 'clsx';
import { getDateByTimezone, IDateFormat } from '../utils/date';

interface Props extends IDateFormat {
  dateTimeClassName?: string;
}

const DateTime: React.FC<Props> = ({ timestamp, format, dateTimeClassName }) => {
  return <p className={clsx(dateTimeClassName)}>{getDateByTimezone({ timestamp, format })}</p>;
};

export default DateTime;
