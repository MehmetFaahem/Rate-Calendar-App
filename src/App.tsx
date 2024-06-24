import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import RateCalendar from "./components/RateCalendar";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RateCalendar />
    </QueryClientProvider>
  );
};

export default App;
