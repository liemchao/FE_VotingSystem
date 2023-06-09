import { BrowserRouter } from "react-router-dom";

import Router from "./routes.js";
import ThemeProvider from "theme/index.js";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}
