import React, { AnchorHTMLAttributes } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  additionalStyle?: React.CSSProperties;
  customStyle?: 'default' | 'secondary';
  text: string;
}

type IStyle = Omit<IProps, 'text'>;

const Anchor = styled.a<IStyle>`
  max-width: 180px;
  max-height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) =>
    props.customStyle === 'default'
      ? props.theme.colors.primary
      : 'transparent'};

  color: ${(props) =>
    props.customStyle === 'default'
      ? props.theme.colors.background
      : props.theme.colors.primary};

  border: 2px solid
    ${(props) =>
      props.customStyle === 'default'
        ? 'transparent'
        : props.theme.colors.primary};

  border-radius: 24px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 12px 16px;
  font-weight: 600;

  span,
  svg {
    color: inherit;
  }
`;

const Button: React.FC<IProps> = ({
  children,
  text,
  customStyle = 'default',
  additionalStyle,
  ...rest
}) => {
  return (
    <>
      <Anchor {...rest} style={additionalStyle} customStyle={customStyle}>
        <span>{text}</span>
        <FiChevronRight size={20} />
        {children}
      </Anchor>
    </>
  );
};

export default Button;
