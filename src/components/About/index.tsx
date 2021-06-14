import Button from 'components/Button';
import { Container, TextContainer } from './styles';

const About = () => {
  return (
    <>
      <Container>
        <div>
          <TextContainer>
            <h6>Venha se cuidar conosco</h6>
            <h2>Sobre nós</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              ipsa aperiam quisquam eaque sequi et officia sit adipisci
              architecto, quo magni repellat sint tempora autem cum at id
              distinctio unde!
            </p>
          </TextContainer>
          <Button customStyle="secondary" text="Agendar Horário" />
        </div>
      </Container>
    </>
  );
};

export default About;
