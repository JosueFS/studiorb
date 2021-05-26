import { FiChevronRight } from 'react-icons/fi';
import { useCallback, useRef } from 'react';

import Button from 'components/Button';
import SocialNetwork from 'components/SocialNetwork';

import { Header, MobileMenu } from './styles';
import { MobileButtonMenu } from './MobileButtonMenu';

const Main = () => {
  const menuRef = useRef<HTMLDivElement>();
  const sidebarRef = useRef<HTMLDivElement>();

  const toggleMenu = useCallback(() => {
    menuRef.current.classList.toggle('open');
    sidebarRef.current.classList.toggle('open');
  }, []);

  return (
    <Header>
      <header>
        <MobileButtonMenu
          ref={menuRef}
          className="menu-btn"
          onClick={toggleMenu}
        >
          <div className="menu-btn__burger"></div>
        </MobileButtonMenu>

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
      </header>
      <MobileMenu ref={sidebarRef}>
        <a href="#">Serviços</a>
        <a href="#">Resultados</a>
        <a href="#">Profissionais</a>
        <a href="#">Contato</a>
        <a href="#">Sobre nós</a>
      </MobileMenu>
    </Header>
  );
};

export default Main;
