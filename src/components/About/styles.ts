import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  padding: 2vh 5vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media handheld and (max-width: 767px),
      screen and (max-device-width: 767px),
      screen and (max-width: 767px) {
      flex-direction: column;
      gap: 32px;

      a {
        width: 100%;
      }
    }
  }
`;

export const TextContainer = styled.div`
  max-width: 60vw;
  h4 {
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: normal;
  }

  h2 {
    font-size: 24px;
    margin: 16px 0;
    font-weight: lighter;
  }

  p {
    margin-bottom: 16px;
  }

  @media handheld and (max-width: 767px),
    screen and (max-device-width: 767px),
    screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const Techniques = styled.div`
  display: flex;

  div {
    display: flex;
    flex-direction: column;
    max-width: 20vw;

    img {
      width: 18vw;
      height: 18vw;
      object-fit: cover;
      border: none;
      border-radius: 50%;
    }

    span {
      width: 100%;
      color: ${(props) => props.theme.colors.textPrimary};
      font-size: 14px;
      font-family: 'Prata', serif;
      letter-spacing: 0.5px;
      text-align: center;
      margin: 16px 0;
    }
  }

  @media handheld and (max-width: 767px),
    screen and (max-device-width: 767px),
    screen and (max-width: 767px) {
    flex-direction: column;
    gap: 32px;

    div {
      max-width: 100%;

      img {
        width: 280px;
        height: 280px;
      }

      span {
        font-size: 16px;
      }
    }
  }
`;
