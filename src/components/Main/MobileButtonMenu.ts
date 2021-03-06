import styled from 'styled-components';

export const MobileButtonMenu = styled.article`
  @media handheld and (min-width: 768px),
    screen and (min-device-width: 768px),
    screen and (min-width: 768px) {
    display: none;
  }

  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  z-index: 999;

  color: #fff;

  .menu-btn__burger {
    width: 50px;
    height: 6px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2); */
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before,
  .menu-btn__burger::after {
    content: '';
    position: fixed;
    width: 50px;
    height: 6px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 5px;
    /* box-shadow: 0 2px 5px rgba(255, 101, 47, 0.2); */
    transition: all 0.5s ease-in-out;
  }
  .menu-btn__burger::before {
    transform: translateY(-16px);
  }
  .menu-btn__burger::after {
    transform: translateY(16px);
  }

  /* ANIMATION */
  &.menu-btn.open .menu-btn__burger {
    transform: translateX(-50px);
    background: transparent;
    box-shadow: none;
  }

  &.menu-btn.open .menu-btn__burger::before {
    transform: rotate(45deg) translate(35px, -35px);
    background: ${(props) => props.theme.colors.background};
  }

  &.menu-btn.open .menu-btn__burger::after {
    transform: rotate(-45deg) translate(35px, 35px);
    background: ${(props) => props.theme.colors.background};
  }
`;
