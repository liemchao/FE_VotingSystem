import { Grid, Paper, Typography, List, ListItem, ListItemText } from "@mui/material";
import candidateImage from "./candidate.jpg";

const CandidatePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper elevation={3}>
          <img
            src="https://png.pngtree.com/png-clipart/20190617/original/pngtree-company-recruitment-fair-successful-candidate-hand-drawn-recruitment-illustration-hand-painted-png-image_3875140.jpg"
            alt="Ảnh ứng cử viên"
          />
          <Typography variant="h4">Tên ứng cử viên</Typography>
          <Typography variant="subtitle1">Vị trí ứng cử: Chức vụ</Typography>
          <Typography variant="body1">Giới thiệu về ứng cử viên</Typography>
          <List>
            <ListItem>
              <ListItemText primary="Địa chỉ email:" secondary="example@example.com" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Số điện thoại:" secondary="0123456789" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Trang web:" secondary="www.example.com" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
};
