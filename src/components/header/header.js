import React, { useContext } from "react";

import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import {
  HeaderContainer,
  TitleContainer,
  DarkModeContainer,
} from "./header.styles";

const Header = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <HeaderContainer>
      <TitleContainer>
        <h1>Social Media Dashboard</h1>
        <h3>Total Followers: 23,004</h3>
      </TitleContainer>
      <DarkModeContainer>
        <p>Dark Mode</p>
        <Switch
          onChange={toggleTheme}
          checked={title === "light"}
          checkedIcon={false}
          uncheckedIcon={false}
          height={25}
          width={50}
          offColor={colors.toggle}
          onColor={colors.toggle}
          handleDiameter={20}
        />
      </DarkModeContainer>
    </HeaderContainer>
  );
};

export default Header;
