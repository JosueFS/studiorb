import styled from 'styled-components';

export const Container = styled.section`
  height: 100%;
  padding: 10vh 5vw;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media handheld and (max-width: 767px),
    screen and (max-device-width: 767px),
    screen and (max-width: 767px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;
