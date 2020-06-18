import React from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';

interface Props {
  value?: string;
  options: string[];
  onOptionChanged: (value: string) => void;
  ariaLabel?: string;
}

const Container = styled.div`
  position: relative;
  display: flex;
  height: 32px;
  background: ${colours.grey};
  overflow: hidden;
  border-radius: 5px;

  & select {
    border: none;
    background: ${colours.grey};
    padding: 0 8px;
    color: ${colours.grey4};
    cursor: pointer;
  }
`;

const Select = ({ value, options, onOptionChanged, ariaLabel }: Props) => {
  const selectOptions = options.map((option, index) => <option key={index}>{option}</option>);

  const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onOptionChanged(event.target.value);
  };

  return (
    <Container>
      <select value={value} onChange={handleOnChange} aria-label={ariaLabel}>
        {selectOptions}
      </select>
    </Container>
  );
};

export default Select;
