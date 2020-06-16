import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';
import { screenSize } from 'constants/screenSizes';

interface Props {
  placeholder?: string;
  value?: string;
  ariaLabel?: string;
  type?: string;
  onSearchTextChanged: (text: string) => void;
  onEnter: () => void;
}

const Input = styled.input`
  min-height: 40px;
  border-radius: 3px;
  border: solid 2px ${colours.grey3};
  padding: 0 10px;
  margin: 20px 40px;
  box-shadow: 0 11px 13px -6px rgba(135, 142, 192, 0.15);
  flex: 1;
  font-size: 1rem;

  &:focus {
    border-color: ${colours.secondary};
    outline: ${colours.secondary};
  }

  @media (max-width: ${screenSize.medium}) {
    margin: 20px 15px;
  }
`;

const SearchBar = ({ placeholder, value, ariaLabel, type, onSearchTextChanged, onEnter }: Props) => {
  const defaultValue = value || '';
  const [inputText, setInputText] = useState(defaultValue);

  const onTextChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the local state
    setInputText(e.target.value);

    // Also let the parent know the search text has changed if used.
    onSearchTextChanged(e.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onEnter();
    }
  };

  return (
    <Input
      value={inputText}
      onChange={onTextChanged}
      placeholder={placeholder}
      aria-label={ariaLabel}
      type={type}
      onKeyDown={handleKeyDown}
    ></Input>
  );
};

export default SearchBar;
