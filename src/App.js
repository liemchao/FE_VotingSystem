import { BrowserRouter } from "react-router-dom";

import Router from "./routes.js";
import ThemeProvider from "theme/index.js";
import { ProviderToken } from "./context/authenToken/AuthenToken.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ProviderToken>
          <Router />
        </ProviderToken>
      </ThemeProvider>
    </BrowserRouter>
  );
}
