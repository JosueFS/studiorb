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
      padding-left: 10%;

      > menu {
        display: flex;
        gap: 16px;
        font-size: clamp(1rem, 1rem + 1vw, 1.4rem);
        font-weight: 700;
        letter-spacing: 1px;
        text-transform: uppercase;

        a {
          color: ${(props) => props.theme.colors.textPrimary};
        }

        @media handheld and (max-width: 767px),
          screen and (max-device-width: 767px),
          screen and (max-width: 767px) {
          display: none;
        }
      }

      div {
        max-width: 600px;
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

    &.open {
      display: none;
    }
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
  height: 100vh;
  top: 0;
  left: -100%;
  transition: 0.3s;

  background: ${(props) => props.theme.colors.primary};

  a {
    display: inline-block;
    margin: 0;
    font-size: clamp(3.2rem, 3.2rem + 1vw, 6.4rem);
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
