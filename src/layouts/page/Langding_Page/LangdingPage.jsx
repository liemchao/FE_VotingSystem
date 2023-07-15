import * as React from "react";
import ThemeProvider from "theme/index.js";
import theme from "assets/theme";
import Appbar from "./components/appbar";
import Promotions from "./components/promotions";
import SearchBox from "./components/search";
import Products from "./components/products";
import { Container, Typography, Box, Stack } from "@mui/material";
import AppDrawer from "./components/drawer";
import { UIProvider } from "./context/ui";
import Footer from "./components/footer";
import BannerLeft from "./components/banner/bannerleft";
import Section2 from "./components/feature";
import PromotionCarousel from "./components/campaign";

//----------------------------------------------------------------

export default function LangdingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <PromotionCarousel />
            <Promotions />
            <BannerLeft />
            <Section2 />
            <SearchBox />
            <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h2">Ứng cử viên</Typography>
            </Box>
            <Products />
            <Footer />
            <AppDrawer />
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
