import { FiChevronDown } from 'react-icons/fi';
import { useCallback, useRef } from 'react';

import Button from 'components/Button';
import SocialNetwork from 'components/SocialNetwork';

import { Header, MobileMenu } from './styles';
import { MobileButtonMenu } from './MobileButtonMenu';
import Logo from 'components/Logo';
import theme from 'styles/theme';

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
            <h1>Fique sempre bronzeada!</h1>
            <p>Você merece estar sempre na cor do verão</p>
            <Button href="#" text="Agendar Horário" />
          </div>
        </div>

        <SocialNetwork />
      </header>
      <MobileMenu ref={sidebarRef}>
        <Logo />
        <a href="#">Serviços</a>
        <a href="#">Resultados</a>
        <a href="#">Profissionais</a>
        <a href="#">Contato</a>
        <a href="#">Sobre nós</a>
      </MobileMenu>

      <FiChevronDown
        id="bouncing-arrow"
        color={theme.colors.textPrimary}
        size={32}
      />
    </Header>
  );
};

export default Main;
