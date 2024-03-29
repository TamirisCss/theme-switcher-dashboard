import styled from "styled-components";

export const SecondaryCardsTitle = styled.h2`
  padding: 2rem 0rem 1rem 0rem;
  color: ${(props) => props.theme.colors.textTheme};
  max-width: 1210px;
  margin: 0 auto;

  @media (max-width: 685px) {
    text-align: center;
  }
  @media (max-width: 398px) {
    margin: 2rem 0rem 1rem 1rem;
  }
`;

export const SecondaryCardsContainer = styled.div`
  max-width: 1210px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 1rem;
  @media (max-width: 685px) {
    justify-content: center;
  }
`;

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgCard};
  width: 240px;
  height: 130px;
  color: ${(props) => props.theme.colors.text};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.3rem 1rem;
`;

export const InfoTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const InfoBottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    color: ${(props) => props.theme.colors.textTheme};
  }
  div {
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 4px;
    img {
      width: 10px;
      height: 10px;
    }
  }
`;
