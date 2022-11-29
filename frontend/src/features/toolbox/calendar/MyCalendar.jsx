import React, { useMemo } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';


const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const { defaultDate } = useMemo(
    () => ({
      defaultDate: new Date(2015, 3, 13)
    }),
    []
  );

  const onView = useCallback((newView) => setView(newView), [setView]);

  return <Calendar defaultDate={defaultDate} onView={onView} {...otherProps} />;
};

export default MyCalendar