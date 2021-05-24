import styled from 'styled-components';

interface IProps {
  customStyle?: 'default' | 'secondary';
}

type IStyle = Omit<IProps, 'text'>;

const Anchor = styled.a<IStyle>`
  max-width: 180px;
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

const Button: React.FC<IProps> = ({ children, customStyle = 'default' }) => {
  return (
    <>
      <Anchor customStyle={customStyle}>{children}</Anchor>
    </>
  );
};

export default Button;
