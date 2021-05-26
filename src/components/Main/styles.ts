import styled from 'styled-components';

export const Header = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  padding: 2vh 5vw;

  background: rgba(255, 255, 255, 0.7), url('./img/bronze_bg1.jpg') no-repeat;
  background: -moz-linear-gradient(
      left,
      rgba(255, 255, 255, 0.7) 25%,
      transparent 95%
    ),
    url('./img/bronze_bg1.jpg') no-repeat;
  background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0.7) 25%,
      transparent 95%
    ),
    url('./img/bronze_bg1.jpg') no-repeat;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.7) 25%,
      transparent 95%
    ),
    url('./img/bronze_bg1.jpg') no-repeat;

  background-size: cover;

  z-index: 1;

  header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div {
      menu {
        display: flex;
        gap: 16px;
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: ${(props) => props.theme.colors.textPrimary};

        @media handheld and (max-width: 767px),
          screen and (max-device-width: 767px),
          screen and (max-width: 767px) {
          display: none;
        }
      }

      div {
        margin-bottom: 15vh;
        h1 {
          font-weight: normal;
          font-size: 40px;
          text-shadow: 2px 2px 32px #333;
          margin-top: 10vh;
        }

        p {
          font-size: 12px;
        }
      }
    }

    ul {
      /* margin-left: 96px; */
    }
  }
`;

export const MobileMenu = styled.menu`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 100%;
  height: 100%;
  top: 0;
  left: -100%;
  transition: 0.5s;

  background: ${(props) => props.theme.colors.primary};

  a {
    display: inline-block;
    margin: 0;
    font-size: 32px;
    color: ${(props) => props.theme.colors.background};

    transition: all 250ms ease-in-out;

    a:after {
      content: '';
      width: 0;
      height: 2px;
      background: #019fb6;
    }

    &:hover {
      letter-spacing: 2px;

      &:after {
        width: 100%;
      }
    }
  }

  &.open {
    left: 0;
  }
`;
