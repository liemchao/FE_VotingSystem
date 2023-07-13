import { makeStyles } from "@mui/styles";
import { Container, Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 12,
    paddingBottom: 12,
    borderTop: `1px solid blue`,
  },
  sectionTitle: {
    marginBottom: 4,
    [theme.breakpoints.up("md")]: {
      marginBottom: 6,
    },
  },
  featureItem: {
    marginBottom: 20,
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  featureItemImg: {
    marginBottom: 1,
    [theme.breakpoints.up("md")]: {
      marginBottom: "0.75 rem",
      order: 2,
    },
  },
}));

function FeatureItem({ src, title, description, items }) {
  const classes = useStyles();

  return (
    <Grid container spacing={6} alignItems="center">
      {/* Image */}
      <Grid item xs={12} md={5} lg={6}>
        <img src={src} width={540} height={405} layout="responsive" />
      </Grid>

      {/* Content */}
      <Grid item xs={12} md={7} lg={6}>
        <div>
          <Typography variant="h3" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      fill="#22C55E"
                    />
                  </svg>
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
    </Grid>
  );
}

function FeatureItem2({ src, title, description, items }) {
  const classes = useStyles();

  return (
    <Grid container spacing={6} alignItems="center">
      {/* Content */}
      <Grid item xs={12} md={7} lg={6}>
        <div>
          <Typography variant="h3" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
          <ul>
            {items.map((item) => (
              <li key={item}>
                <Typography variant="body1" display="flex" alignItems="center" gutterBottom>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"
                      fill="#22C55E"
                    />
                  </svg>
                  {item}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </Grid>
      {/* Image */}
      <Grid item xs={12} md={5} lg={6}>
        <img src={src} width={540} height={405} layout="responsive" />
      </Grid>
    </Grid>
  );
}

export default function MyComponent() {
  const classes = useStyles();

  return (
    <section id="section-3" className={classes.root}>
      <Container maxWidth="lg">
        {/* Section header */}
        <div className={classes.sectionTitle}>
          <Typography variant="h4" component="h4" gutterBottom>
            Sản phẩm chúng tôi cung cấp thống kê bằng bảng thông dụng
          </Typography>
          <Typography variant="body1" gutterBottom>
            Những thiết kế cơ bản nhưng mang lại hiệu quả cao trong quản lý các nguồn tài nguyên cho
            người dùng những trãi nghiệm chân thật
          </Typography>
        </div>

        {/* Items */}
        <Grid container spacing={0}>
          {/* 1st item */}
          <Grid item xs={12}>
            <FeatureItem2
              src="https://landingpage-f-evoting-lbno-j27r6bkxl-liemchao.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures-03-image-01.c6c2a762.png&w=640&q=75"
              title="Quản lý những chiến dịch"
              description="Thoải mái lựa chọn tham gia những chiến dịch mà bạn thích."
              items={["Tham gia chiến dịch", "Chia sẻ chiến dịch", "Tạo chiến dịch cho bản thân"]}
            />
          </Grid>

          {/* 2nd item */}
          <Grid item xs={12}>
            <FeatureItem
              title="Hỗ trợ chia sẻ chiến dịch với nhau"
              description="Thông qua nhiều cách để tham gia các chiếndịch và chia sẻ chúng với nhau, bạn có thể tạo ra một cộng đồng đầy đủ và đa dạng những chiến dịch."
              items={[
                "Chia sẻ chiến dịch với bạn bè",
                "Kết nối với người dùng khác",
                "Tìm kiếm chiến dịch tương tự",
              ]}
              src="https://landingpage-f-evoting-lbno-j27r6bkxl-liemchao.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeatures-03-image-01.c6c2a762.png&w=640&q=75"
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
