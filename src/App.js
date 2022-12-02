import { useState } from "react";

import MainCards from "./components/mainCards/mainCards";
import Header from "./components/header/header";
import { BackgroundContainer } from "./components/background";

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
      <BackgroundContainer>
        <Header toggleTheme={toggleTheme} />
        <MainCards />
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default App;
