import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  padding: 10vh 5vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  background-color: ${(props) => props.theme.colors.secondary};

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
  h6 {
    color: ${(props) => props.theme.colors.primary};
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: normal;
  }

  h2 {
    font-size: clamp(2.4rem, 2.4rem + 1vw, 4.8rem);
    margin: 16px 0;
    font-weight: 500;
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
      font-size: clamp(1.6rem, 2.4rem + 1vw, 3.2rem);
      font-weight: 600;
      font-family: 'Cormorant Garamond', serif;
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
        width: 260px;
        height: 260px;
      }

      span {
        font-size: clamp(1.6rem, 2.4rem + 1vw, 2.8rem);
      }
    }
  }
`;
