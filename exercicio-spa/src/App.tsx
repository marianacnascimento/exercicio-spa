import React from "react";
import GlobalStyle from "./config/GlobalStyled";
import { ThemeProvider } from "styled-components";
import { AppRoutes } from "./routes/AppRouter";

const themes = {
  dark: {
    color: "#f5f5f5",
    bgColor: " #000000",
    primary: "#19def0"
  },

  light: {
    color: " #000000",
    bgColor: "#f5f5f5",
    primary: "#6747b6e9"
  }
};

function App() {
  return (
    <div>
      <ThemeProvider theme={themes.light}>
        <GlobalStyle />
        <AppRoutes />
      </ThemeProvider>
    </div>
  );
}

export default App;
