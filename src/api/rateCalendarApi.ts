import axios from "axios";

const BASE_URL =
  "https://api.bytebeds.com/api/v1/property/1/room/rate-calendar/assessment";

export const fetchRateCalendar = async (startDate: string, endDate: string) => {
  if (startDate && endDate) {
    const response = await axios.get(BASE_URL, {
      params: {
        start_date: startDate,
        end_date: endDate,
      },
    });
    return response.data.data;
  }
};
