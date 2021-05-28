import Button from 'components/Button';
import { Container, TextContainer, Techniques } from './styles';

const About = () => {
  return (
    <>
      <Container>
        <div>
          <TextContainer>
            <h6>A pele fica bem mais bonita com o corpo bronzeado</h6>
            <h2>Chamada Bronzeamento</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
              ipsa aperiam quisquam eaque sequi et officia sit adipisci
              architecto, quo magni repellat sint tempora autem cum at id
              distinctio unde!
            </p>
          </TextContainer>
          <Button customStyle="secondary" text="Agendar Horário" />
        </div>

        <Techniques>
          <div>
            <img src="./img/bronzeamento.jpg" />
            <span>Bronzeamento Artificial</span>
          </div>

          <div>
            <img src="./img/bronzeamento.jpg" />
            <span>Bronzeamento à Jato</span>
          </div>

          <div>
            <img src="./img/bronzeamento.jpg" />
            <span>Bronzeamento Natural</span>
          </div>

          <div>
            <img src="./img/bronzeamento.jpg" />
            <span>Bronzeamento etc</span>
          </div>
        </Techniques>
      </Container>
    </>
  );
};

export default About;
