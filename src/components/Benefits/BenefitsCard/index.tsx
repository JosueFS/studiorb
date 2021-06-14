import styled from 'styled-components';

const Container = styled.div`
  height: 300px;
  width: 260px;
  box-shadow: 8px 8px 16px rgba(50, 50, 50, 0.1);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  img {
    width: 35%;
    border-radius: 50%;
    box-shadow: 4px 4px 8px rgba(50, 50, 50, 0.1);
  }
`;

const Title = styled.h3`
  width: 100%;
  font-size: xx-large;
  font-weight: 500;
`;

const Description = styled.p`
  width: 100%;
  font-family: 'Cormorant Garamond';
  font-size: large;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const BenefitsCard = () => {
  return (
    <Container>
      <img
        src="https://cdn0.iconfinder.com/data/icons/skin-care-4/1000/Skin07-04-512.png"
        alt="skin care health"
      />
      <Title>Diferencial #01</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Description>
    </Container>
  );
};

export default BenefitsCard;
