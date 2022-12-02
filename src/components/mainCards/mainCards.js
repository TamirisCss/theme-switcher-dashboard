import React from "react";

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
  console.log(mainCards);

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
            <CardIsPositive>
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
