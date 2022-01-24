import React from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';

interface Props {
  size?: number;
  children?: React.ReactNode;
  onClick?: () => void;
  isActive: boolean;
}

const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  color: ${colours.grey6};
  font-weight: bold;
  background-color: ${(props) => (props.isActive ? `${colours.grey}` : 'white')};
  margin: 0 5px;
  cursor: pointer;
  height: 40px;
  padding: 0 18px;

  &:hover {
    background-color: ${colours.grey};
  }
`;

const TextButton = ({ size, children, onClick, isActive }: Props) => {
  return (
    <Button onClick={onClick} size={size} isActive={isActive}>
      {children}
    </Button>
  );
};

export default TextButton;
