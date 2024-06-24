import React from "react";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { Box, TextField } from "@mui/material";
import moment, { Moment } from "moment";

interface CustomDateRangePickerProps {
  value: DateRange<Moment>;
  onChange: (newValue: DateRange<Moment>) => void;
}

const CustomDateRangePicker: React.FC<CustomDateRangePickerProps> = ({
  value,
  onChange,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Box sx={{ mt: 2 }}>
        <DateRangePicker
          value={value}
          onChange={(newValue) => onChange(newValue as DateRange<Moment>)}
          localeText={{ start: "Start Date", end: "End Date" }}
        />
      </Box>
    </LocalizationProvider>
  );
};

export default CustomDateRangePicker;
