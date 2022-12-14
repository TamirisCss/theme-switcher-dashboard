import React from "react";

import iconDown from "../../img/icon-down.svg";
import iconUp from "../../img/icon-up.svg";

import {
  MainCardsContainer,
  CardContainer,
  InfoTopContainer,
  CardNumberFollowers,
  CardFollowers,
  CardIsPositive,
} from "./mainCards.styles";

import data from "../../data.json";

const MainCards = () => {
  const mainCards = data.mainCards;

  return (
    <>
      <MainCardsContainer>
        {mainCards.map((card) => (
          <CardContainer key={card.id}>
            <InfoTopContainer>
              <img src={card.icon} alt="icon" />
              <span>{card.email}</span>
            </InfoTopContainer>
            <CardNumberFollowers>{card.followers}</CardNumberFollowers>
            <CardFollowers>{card.status}</CardFollowers>
            <CardIsPositive
              style={{ color: card.positive ? "#1db489" : "#dc414c" }}
            >
              <img src={card.positive ? iconUp : iconDown} alt="icon" />
              {card.today}
              <span>Today</span>
            </CardIsPositive>
          </CardContainer>
        ))}
      </MainCardsContainer>
      ;
    </>
  );
};

export default MainCards;
