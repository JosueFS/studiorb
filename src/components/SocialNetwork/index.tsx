import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;

  li {
    width: 48px;
    height: 48px;
    list-style: none;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      transition: all 0.5s;

      svg {
        color: ${(props) => props.theme.colors.textPrimary};
        transition: all 0.2s ease-out;

        &.bgDark {
          color: ${(props) => props.theme.colors.background};
        }
      }
    }

    //Instagram icon
    &:hover:nth-child(1) {
      a {
        background: radial-gradient(
          circle at 30% 107%,
          #fdf497 0%,
          #fdf497 5%,
          #fd5949 45%,
          #d6249f 60%,
          #285aeb 90%
        );

        svg {
          color: #fff;
          width: 40px;
          height: 40px;
        }
      }
    }

    //Facebook icon
    &:hover:nth-child(2) {
      a {
        /* background: ${(props) => props.theme.colors.facebook}; */
        svg {
          color: ${(props) => props.theme.colors.facebook};
          width: 40px;
          height: 40px;
        }
      }
    }

    //Whatsapp icon
    &:hover:nth-child(3) {
      a {
        /* background: #fff; */
        svg {
          color: ${(props) => props.theme.colors.whatsapp};
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

interface IProps {
  customClass?: string;
}

const SocialNetwork: React.FC<IProps> = ({ customClass = '' }) => {
  return (
    <SocialLinks>
      <li>
        <a href="https://github.com/JosueFS">
          <FaInstagram size={32} className={customClass} />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jfds">
          <FaFacebook size={32} className={customClass} />
        </a>
      </li>
      <li>
        <a href="mailto:josue.18rj@gmail.com">
          <FaWhatsapp size={32} className={customClass} />
        </a>
      </li>
    </SocialLinks>
  );
};

export default SocialNetwork;
