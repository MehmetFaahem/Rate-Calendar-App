import React, { useState } from "react";
import { DateRange } from "@mui/x-date-pickers-pro";
import CustomDateRangePicker from "./DateRangePicker";
import RoomCategory from "./RoomCategory";
import { useRateCalendar } from "../hooks/useRateCalendar";
import { Box, CircularProgress, Container, Typography } from "@mui/material";
import { IRoomCategory } from "../types";
import moment, { Moment } from "moment";

const RateCalendar: React.FC = () => {
  const [dateRange, setDateRange] = useState<DateRange<Moment>>([null, null]);
  const startDate = dateRange[0]?.format("YYYY-MM-DD") || "";
  const endDate = dateRange[1]?.format("YYYY-MM-DD") || "";

  const { data, isLoading, error } = useRateCalendar(startDate, endDate);

  return (
    <Container className="p-[40px]">
      <Box
        sx={{
          px: "35px",
        }}
      >
        <Typography variant="h4">Rate Calendar</Typography>
        <Box
          sx={{
            my: "40px",
          }}
        >
          <CustomDateRangePicker value={dateRange} onChange={setDateRange} />
        </Box>
      </Box>
      {isLoading && (
        <Box
          sx={{
            my: "40px",
            mx: "35px",
          }}
        >
          <CircularProgress />
        </Box>
      )}
      {error && <Typography color="error">Failed to load data</Typography>}
      {data &&
        data.map((category: IRoomCategory) => (
          <RoomCategory key={category.id} category={category} />
        ))}
    </Container>
  );
};

export default RateCalendar;
