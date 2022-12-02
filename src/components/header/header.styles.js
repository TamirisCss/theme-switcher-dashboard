import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 6rem;
  padding-top: 2rem;
  @media (max-width: 685px) {
    margin: 0 3rem;
  }
  @media (max-width: 550px) {
    flex-direction: column;
  }
  @media (max-width: 398px) {
    margin: 0 1rem;
  }
`;

export const TitleContainer = styled.div`
  h1 {
    color: ${(props) => props.theme.colors.textTheme};
    font-size: 1.6rem;
  }
  h3 {
    color: ${(props) => props.theme.colors.text};
    font-size: 1.1rem;
    font-weight: 500;
    margin-top: 5px;
  }
`;

export const DarkModeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  p {
    color: ${(props) => props.theme.colors.text};
    font-weight: 600;
  }
  @media (max-width: 550px) {
    justify-content: space-between;
    margin-top: 1rem;
    border-top: 1px solid ${(props) => props.theme.colors.text};
    padding: 1rem 0;
  }
`;
