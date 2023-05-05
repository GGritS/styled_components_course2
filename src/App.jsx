import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Login } from "./components/pages/Login";
import "./index.css";

import { useState } from "react";
import { darkTheme } from "./themes/dark";
import { lightTheme } from "./themes/light";

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${(p) => p.theme.bodyBackgroundColor};
    color:  ${(p) => p.theme.bodyFontColor}
  }
`;

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const changeTheme = () => {
    setTheme(theme.id === "light" ? darkTheme : lightTheme);
  };
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: changeTheme,
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
