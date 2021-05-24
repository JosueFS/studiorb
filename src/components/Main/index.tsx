import { FiChevronRight } from 'react-icons/fi';

import Button from 'components/Button';
import { Header, MobileMenu } from './styles';
import SocialNetwork from 'components/SocialNetwork';

import MobileButtonMenu from 'components/MobileButtonMenu';

const Main = () => {
  return (
    <Header>
      <header>
        <MobileButtonMenu />

        <div>
          <menu>
            <a href="#">Serviços</a>
            <a href="#">Resultados</a>
            <a href="#">Profissionais</a>
            <a href="#">Contato</a>
            <a href="#">Sobre nós</a>
          </menu>

          <div>
            <h1>Realce sua beleza com a gente</h1>
            <p>Venha relaxar e deixa que a gente cuida de você!</p>
          </div>
          <Button>
            <span>Agendar horário</span>
            <FiChevronRight size={20} />
          </Button>
        </div>

        <SocialNetwork />

        <MobileMenu>
          <a href="#">Serviços</a>
          <a href="#">Resultados</a>
          <a href="#">Profissionais</a>
          <a href="#">Contato</a>
          <a href="#">Sobre nós</a>
        </MobileMenu>
      </header>
    </Header>
  );
};

export default Main;
