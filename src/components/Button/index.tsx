import React from 'react';
import styled from 'styled-components';

interface IProps {
  additionalStyle?: React.CSSProperties;
  customStyle?: 'default' | 'secondary';
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
`;

const Button: React.FC<IProps> = ({
  children,
  customStyle = 'default',
  additionalStyle,
}) => {
  return (
    <>
      <Anchor style={additionalStyle} customStyle={customStyle}>
        {children}
      </Anchor>
    </>
  );
};

export default Button;
