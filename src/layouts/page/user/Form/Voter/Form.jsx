import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import ListCandidate from "./List Candidate/ListCandidate";




export default function Overview() {

  return (
    <>
      <Card sx={{ maxheight: '690px' }}>
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
            Dino là chú khủng long rất yêu thể thao. Chú thích chơi tất cả các môn thể thao: nào bóng đá, quần vợt, rồi bóng rổ.. Không những vậy, chú còn là một vận động viên trượt tuyết cừ khôi nhất.
            Có lần, trong lúc chơi quần vợt, chú vô tình dẫm lên một bông hoa rất đẹp.
            <br /> – Ôi, tôi xin lỗi!- Dino vội nói.
            Nhưng bông hoa không thể trả lời chú vì đã bị dẫm nát. Điều đó làm Dino buồn bã và hối hận suốt một tuần.
            <br />– Mình sẽ không bao giờ dẫm lên ai nữa. Từ bây giờ trở đi, lúc nào mình cũng sẽ đi nhón chân nhẹ nhàng.
            Và thế là thay vì trở thành vận động viên thể thao, Dino đã trở thành một nghệ sĩ múa.
          </Typography>
        </CardContent>
      </Card>

      <ListCandidate />
    </>
  );
}