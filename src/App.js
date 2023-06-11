import { BrowserRouter } from "react-router-dom";

import Router from "./routes.js";
import ThemeProvider from "theme/index.js";

import { Provider } from "authenToken/AuthenToken.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Provider>
          <Router />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}
