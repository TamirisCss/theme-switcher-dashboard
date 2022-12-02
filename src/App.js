import { useState } from "react";

import MainCards from "./components/mainCards/mainCards";
import Header from "./components/header/header";

import { ThemeProvider } from "styled-components";

import dark from "./theme/dark";
import light from "./theme/light";

const App = () => {
  const [theme, setTheme] = useState(dark);

  const toggleTheme = () => {
    setTheme(theme.title === "dark" ? light : dark);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <MainCards />
    </ThemeProvider>
  );
};

export default App;
