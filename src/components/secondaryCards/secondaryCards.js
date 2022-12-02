import React from "react";

import iconDown from "../../img/icon-down.svg";
import iconUp from "../../img/icon-up.svg";

import data from "../../data.json";

import {
  SecondaryCardsTitle,
  SecondaryCardsContainer,
  CardContainer,
  InfoTopContainer,
  InfoBottomContainer,
} from "./secondaryCards.styles";

const SecondaryCards = () => {
  const secondaryCards = data.secondaryCards;

  return (
    <>
      <SecondaryCardsTitle>Overview - Today</SecondaryCardsTitle>
      <SecondaryCardsContainer>
        {secondaryCards.map((card) => (
          <CardContainer key={card.id}>
            <InfoTopContainer>
              <p>{card.status}</p>
              <img src={card.icon} alt="icon" />
            </InfoTopContainer>
            <InfoBottomContainer>
              <h3>{card.today}</h3>
              <div style={{ color: card.positive ? "#1db489" : "#dc414c" }}>
                <img src={card.positive ? iconUp : iconDown} alt="icon" />{" "}
                {card.followers}
                <span>Today</span>
              </div>
            </InfoBottomContainer>
          </CardContainer>
        ))}
      </SecondaryCardsContainer>
    </>
  );
};

export default SecondaryCards;
