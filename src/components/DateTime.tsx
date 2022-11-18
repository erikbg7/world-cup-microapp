import React from 'react';
import { getDateByTimezone, IDateFormat } from '../utils/date';

interface Props extends IDateFormat {
  className?: string;
}

const DateTime: React.FC<Props> = ({ timestamp, format, className }) => {
  return <p className={className}>{getDateByTimezone({ timestamp, format })}</p>;
};

export default DateTime;
