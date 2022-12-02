import styled from "styled-components";

export const MainCardsContainer = styled.div`
  margin: 2rem 6rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 685px) {
    margin: 2rem 3rem;
  }
  @media (max-width: 550px) {
    justify-content: center;
  }
  @media (max-width: 398px) {
    margin: 2rem 1rem;
  }
`;

export const CardContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgCard};
  width: 220px;
  height: 190px;
  color: ${(props) => props.theme.colors.text};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.3rem 0;
`;

export const CardFollowers = styled.p`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 0.8rem;
`;
export const CardNumberFollowers = styled.h3`
  color: ${(props) => props.theme.colors.textTheme};
  font-size: 2rem;
  margin: 0.5rem 0;
`;

export const InfoTopContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  img {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

export const CardIsPositive = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  img {
    width: 10px;
    height: 10px;
  }
`;
