import { Box, Grid, Typography } from "@mui/material";

// import các icon từ '@mui/icons-material'
import { Assessment, CheckCircle, Security } from "@mui/icons-material";

export default function Section2() {
  return (
    <section id="section-2">
      <Box
        sx={{ maxWidth: "6xl", mx: "auto", px: { xs: 2, sm: 4 } }}
        py={{ xs: 8, md: 12, lg: 20 }}
      >
        {/* Section header */}
        <Box sx={{ maxWidth: "3xl", mx: "auto", pb: { xs: 6, md: 12 } }}>
          <Typography variant="h2" sx={{ mb: 4 }} color="blue">
            Tại sao phải lựa chọn hệ thống của chúng tôi ?
          </Typography>
          <Typography variant="body1" sx={{ color: "blue" }}>
            Chúng tôi cung cấp một hệ thống bình chọn gồm nhiều tiêu chí phù hợp với các yêu cầu của
            bạn.
          </Typography>
        </Box>

        {/* Items */}
        <Grid container spacing={8} justifyContent="center">
          {/* 1st item */}
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              data-aos="fade-up"
            >
              <Assessment sx={{ width: 80, height: 80, mb: 2 }} color="primary" />
              <Typography variant="h4" sx={{ mb: 2 }} color="blue">
                Đánh giá
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }} color="blue">
                Đánh giá các chiến dịch và nhận các bình luận cho chiến dịch
              </Typography>
            </Box>
          </Grid>

          {/* 2nd item */}
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <CheckCircle sx={{ width: 80, height: 80, mb: 2 }} color="primary" />
              <Typography variant="h4" sx={{ mb: 2 }} color="blue">
                Các mẫu bình chọn
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }} color="blue">
                Chúng tôi cung cấp nhiều mẫu bình chọn cho các người dùng chọn lựa
              </Typography>
            </Box>
          </Grid>

          {/* 3rd item */}
          <Grid item xs={12} md={6} lg={4}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Security sx={{ width: 80, height: 80, mb: 2 }} color="primary" />
              <Typography variant="h4" sx={{ mb: 2 }} color="blue">
                Tính bảo mật
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }} color="blue">
                Tất cả thông tin người dùng người ứng cử viên. Các thông tin sẽ được bảo mật.
              </Typography>
            </Box>
          </Grid>

          {/* 4th item */}

          {/* 5th item */}

          {/* 6th item */}
        </Grid>
      </Box>
    </section>
  );
}
