import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Avatar } from "@mui/material";
import ListCandidate from "./List Candidate/ListCandidate";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import Select from "components/Control/Select";
export default function FormVote() {
  const [searchTerm, setSearchTerm] = useState("");
  const getOptions = () => [
    { id: "active", title: "Đang hoạt động" },
    { id: "inActive", title: "Trạng thái ẩn" },
    { id: "All", title: "Không hoạt động" },
  ];

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Card sx={{ maxheight: "690px" }}>
        <Avatar
          alt="Remy Sharp"
          src="https://hanoitop10.com/wp-content/uploads/2023/01/anh-luffy-cute_1-jpg.webp"
          sx={{ width: 56, height: 56 }}
        />
        <CardContent>
          <Typography gutterBottom variant="h2" component="div">
            Chiến dịch Bình Chọn Ứng Viên Tiêu Biểu
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Dino là chú khủng long rất yêu thể thao. Chú thích chơi tất cả các môn thể thao: nào
            bóng đá, quần vợt, rồi bóng rổ.. Không những vậy, chú còn là một vận động viên trượt
            tuyết cừ khôi nhất. Có lần, trong lúc chơi quần vợt, chú vô tình dẫm lên một bông hoa
            rất đẹp.
            <br /> – Ôi, tôi xin lỗi!- Dino vội nói. Nhưng bông hoa không thể trả lời chú vì đã bị
            dẫm nát. Điều đó làm Dino buồn bã và hối hận suốt một tuần.
            <br />– Mình sẽ không bao giờ dẫm lên ai nữa. Từ bây giờ trở đi, lúc nào mình cũng sẽ đi
            nhón chân nhẹ nhàng. Và thế là thay vì trở thành vận động viên thể thao, Dino đã trở
            thành một nghệ sĩ múa.
          </Typography>
        </CardContent>
      </Card>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField variant="outlined" label="Search by name" sx={{ mr: 1, mt: 1 }} />
        {/* <Button variant="contained" color="primary" sx={{ mr: 1 }}>
        Filter
      </Button> */}
        <Pagination sx={{ ml: 21 }} count={4} color="primary" />

        <Box sx={{ display: "flex", marginLeft: "2%", marginTop: "1%" }}>
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
        </Box>
      </Box>
      <ListCandidate />
    </>
  );
}
