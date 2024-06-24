import { useQuery } from "react-query";
import { fetchRateCalendar } from "../api/rateCalendarApi";

export const useRateCalendar = (startDate: string, endDate: string) => {
  return useQuery(["rateCalendar", startDate, endDate], () =>
    fetchRateCalendar(startDate, endDate)
  );
};
