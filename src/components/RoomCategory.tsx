import React from "react";
import { IRoomCategory, IRoomInventoryCalendar, IRatePlan } from "../types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

interface RoomCategoryProps {
  category: IRoomCategory;
}

const RoomCategory: React.FC<RoomCategoryProps> = ({ category }) => {
  // Extract the relevant data for the first 16 days for simplicity
  const inventoryCalendar: IRoomInventoryCalendar[] =
    category.inventory_calendar.slice(0, 16);
  const ratePlan: IRatePlan | undefined = category.rate_plans[0];
  const rateCalendar = ratePlan?.calendar.slice(0, 16) || [];

  return (
    <TableContainer component={Paper} sx={{ p: 4, width: "94vw" }}>
      <Table sx={{ width: "100vw", borderCollapse: "collapse" }}>
        <TableHead sx={{ width: "100vw" }}>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid",
                p: 2,
                textAlign: "center",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            ></TableCell>
            {inventoryCalendar.map((item) => (
              <TableCell
                key={item.date}
                align="right"
                sx={{
                  border: "1px solid",
                  p: 2,
                }}
                colSpan={1}
              >
                <Typography
                  sx={{
                    width: "30px",
                    textAlign: "right",
                    fontWeight: 700,
                  }}
                >
                  {new Date(item.date).toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                  })}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid",
                p: 2,
                textAlign: "left",
                fontWeight: 800,
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              {category.name}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid",
                p: 2,
                textAlign: "left",
                width: "max-content",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Room status
            </TableCell>
            {inventoryCalendar.map((item) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid",
                  p: 2,
                  textAlign: "center",
                  bgcolor: item.status ? "#4CAF50" : "#F44336",
                  color: "white",
                  borderColor: "black",
                }}
              >
                {item.status ? "Open" : "Closed"}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Rooms to sell
            </TableCell>
            {inventoryCalendar.map((item) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid",
                  p: 2,
                  textAlign: "center",
                  bgcolor: item.status ? "inherit" : "#F44336",
                }}
              >
                {item.available}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Net booked
            </TableCell>
            {inventoryCalendar.map((item) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid",
                  p: 2,
                  textAlign: "center",
                  bgcolor: item.status ? "inherit" : "#F44336",
                }}
              >
                {item.booked}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Standard Rate
            </TableCell>
            {rateCalendar.map((item, index) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid",
                  p: 2,
                  textAlign: "center",
                  bgcolor: inventoryCalendar[index].status
                    ? "inherit"
                    : "#F44336",
                }}
              >
                {item.rate}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Min. length of stay
            </TableCell>
            {rateCalendar.map((item, index) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid",
                  p: 2,
                  textAlign: "center",
                  bgcolor: inventoryCalendar[index].status
                    ? "inherit"
                    : "#F44336",
                }}
              >
                {item.min_length_of_stay}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                border: "1px solid",
                p: 2,
                textAlign: "left",
                position: "sticky",
                left: 0,
                zIndex: 1,
                bgcolor: "white",
              }}
            >
              Min. advance reservation
            </TableCell>
            {rateCalendar.map((item, index) => (
              <TableCell
                key={item.id}
                align="center"
                sx={{
                  border: "1px solid",
                  p: 2,
                  textAlign: "center",
                  bgcolor: inventoryCalendar[index].status
                    ? "inherit"
                    : "#F44336",
                }}
              >
                {item.reservation_deadline}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoomCategory;
