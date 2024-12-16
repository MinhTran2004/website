import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

const DatePickerComponent = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    console.log(date); // In ra giá trị ngày tháng được chọn
    setSelectedDate(date);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Chọn ngày"
        value={selectedDate}
        onChange={handleDateChange}
        // renderInput={(params:any) => (
        //   <TextField {...params} helperText="valid mask" />
        // )}
      />
    </LocalizationProvider>
  );
};

export default DatePickerComponent;
