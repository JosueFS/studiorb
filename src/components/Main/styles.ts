import styled from 'styled-components';

export const Header = styled.section`
  height: 100vh;
  width: 100%;

  display: flex;
  padding: 5vh 5vw;

  background: rgba(255, 255, 255, 0.8), url('./img/bronze_bg2.jpg') no-repeat;
  background: -moz-linear-gradient(
      left,
      rgba(255, 255, 255, 0.75) 20%,
      transparent 95%
    ),
    url('./img/bronze_bg2.jpg') no-repeat;
  background: -webkit-linear-gradient(
      left,
      rgba(255, 255, 255, 0.75) 20%,
      transparent 95%
    ),
    url('./img/bronze_bg2.jpg') no-repeat;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.75) 20%,
      transparent 95%
    ),
    url('./img/bronze_bg2.jpg') no-repeat;

  background-size: cover;

  z-index: 1;

  header {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      padding-left: 20%;

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
        max-width: max(600px, 90%);
        h1 {
          font-weight: normal;
          text-shadow: 0 0 24px #333;
          margin-top: 20vh;
        }

        p {
          margin-bottom: 10vh;
        }
      }
    }

    ul {
      /* margin-left: 96px; */
    }
  }

  #bouncing-arrow {
    position: absolute;
    bottom: 1rem;
    right: 2rem;
    margin-left: -20px;
    width: 40px;
    height: 40px;

    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-30px);
    }
    60% {
      transform: translateY(-15px);
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
  transition: 0.3s;

  background: ${(props) => props.theme.colors.primary};

  a {
    display: inline-block;
    margin: 0;
    font-size: 32px;
    color: ${(props) => props.theme.colors.background};

    transition: all 250ms ease-in-out;

    &::after {
      display: block;
      content: '';
      border-bottom: solid 2px #efc6c0;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }

    &:hover {
      letter-spacing: 4px;

      &::after {
        transform: scaleX(1);
      }
    }
  }

  &.open {
    left: 0;
  }
`;
