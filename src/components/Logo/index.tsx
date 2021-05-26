import styled from 'styled-components';

export const LogoContainer = styled.div`
  img {
    max-width: 250px;
    /* background: #fff; */
    filter: contrast(0.5) brightness(1.5);
  }
`;

const Logo = () => {
  return (
    <LogoContainer>
      <img src="./img/studiorb1.png" />
    </LogoContainer>
  );
};

export default Logo;
