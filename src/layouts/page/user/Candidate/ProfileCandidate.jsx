import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import Element from "./Element";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
export default function ProfileCandidata() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Card sx={{ maxheight: "100px", marginTop: "-2%" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyBp3-DrQ2g6NbgtBg0AOobNA1MEY7MC4_OQ&usqp=CAU"
          sx={{ width: 75, height: 75 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            Nguyễn Thanh Liêm
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tại sao chúng ta phải phải tham gia vào những chiến dịch ngớ ngẩn vì chúng ta cần nó.
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: "-2%" }}>
        {/* <TextField variant="outlined" label="Search by name" sx={{ mr: 1, mt: 1 }} /> */}
        {/* <Button variant="contained" color="primary" sx={{ mr: 1 }}>
        Filter
      </Button> */}
        {/* <Pagination sx={{ ml: 21 }} count={4} color="primary" /> */}

        {/* <Box sx={{ display: "flex", marginLeft: "2%", marginTop: "1%" }}>
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
          <Select
            sx={{ ml: 21, mt: 2 }}
            name="foodCategoryId"
            required
            label="Trạng thái"
            width="13rem"
            height="10rem"
            onChange={(e) => {}}
            options={getOptions()}
          />
        </Box> */}
        <Element />
      </Box>
    </>
  );
}
