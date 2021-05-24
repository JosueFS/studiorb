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
  display: none;
`;
