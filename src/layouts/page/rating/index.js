import React from "react";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Table,
  TableBody,
  TableRow,
  TableCell,
  useMediaQuery,
  Grid,
  Box,
  Typography,
} from "@mui/material";
import winnerImage from "../../../assets/images/logos/150577.svg";

const topList = [
  { name: "John", score: 50, avatar: "https://picsum.photos/200" },
  { name: "Jane", score: 40, avatar: "https://picsum.photos/200" },
  { name: "Bob", score: 30, avatar: "https://picsum.photos/200" },
];

const userList = [
  { name: "John", score: 50, avatar: "https://picsum.photos/200" },
  { name: "Jane", score: 40, avatar: "https://picsum.photos/200" },
  { name: "Bob", score: 30, avatar: "https://picsum.photos/200" },
  { name: "Alice", score: 20, avatar: "https://picsum.photos/200" },
  { name: "Eve", score: 10, avatar: "https://picsum.photos/200" },
];

const TopList = () => (
  <List>
    {topList.map((user, index) => (
      <ListItem key={index}>
        <ListItemAvatar>
          {index === 0 ? (
            <Box position="relative">
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Avatar>
                  <img style={{ fill: "yellow" }} src={winnerImage} width="100" height="50" />
                </Avatar>
                <Box
                  sx={{
                    position: "absolute",
                    top: "44%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    backgroundColor: "yellow",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "16px",
                    color: "white",
                  }}
                >
                  <Typography variant="body1" sx={{ lineHeight: 1 }}>
                    1
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box>
              <Avatar>
                <img style={{ fill: "yellow" }} src={winnerImage} width="100" height="50" />
              </Avatar>

              <Box
                sx={{
                  position: "absolute",
                  top: "48%",
                  left: "25%",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  backgroundColor: "orange",
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "white",
                }}
              >
                <Typography variant="body1" sx={{ lineHeight: 1 }}>
                  2
                </Typography>
              </Box>
            </Box>
          )}
        </ListItemAvatar>
        <ListItemText primary={user.name} secondary={`Score: ${user.score}`} />
      </ListItem>
    ))}
  </List>
);

const UserTable = () => (
  <Table>
    <TableBody>
      {userList.map((user, index) => (
        <TableRow key={index}>
          <TableCell>
            <Avatar src={user.avatar} />
          </TableCell>
          <TableCell>{user.name}</TableCell>
          <TableCell>{user.score}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const TopAndTable = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <>
      <Box
        sx={{
          border: "1px solid green",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: "16px" }}>
          Top List
        </Typography>
        <TopList />
      </Box>
      <Box
        sx={{
          border: "1px solid green",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" sx={{ marginTop: "16px", marginBottom: "16px" }}>
          User Table
        </Typography>
        <UserTable />
      </Box>
    </>
  );
};

export default TopAndTable;
