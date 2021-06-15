import Button from 'components/Button';
import { Container, TextContainer, Techniques } from './styles';

const Services = () => {
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
        </div>

        <Techniques>
          <div>
            <img src="./img/bronzeamento.jpg" />
            <span>Serviço #01</span>
          </div>

          <div>
            <img src="./img/bronzeamento.jpg" />
            <span>Serviço #02</span>
          </div>

          <div>
            <img src="./img/bronzeamento.jpg" />
            <span>Serviço #03</span>
          </div>

          <div>
            <img src="./img/bronzeamento.jpg" />
            <span>Serviço #04</span>
          </div>
        </Techniques>

        <Button customStyle="secondary" text="Agendar Horário" />
      </Container>
    </>
  );
};

export default Services;
