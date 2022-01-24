import React from 'react';
import styled from 'styled-components/macro';
import Select from '../../../components/Select';
import TextButton from '../../../components/TextButton';
import { useDispatch, useSelector } from 'react-redux';
import { sortByUpdated, pageNumberUpdated, postsSelector } from 'slices/postsSlice';
import { screenSize } from 'constants/screenSizes';

const Container = styled.div`
  display: flex;
  background-color: white;
  flex-direction: row;
  align-items: center;
`;

// For larger screens, display the sorting options as buttons.
const SortButtons = styled.div`
  display: flex;

  @media (max-width: ${screenSize.medium}) {
    display: none;
  }
`;

// On smaller screens the sorting options will be displayed as a dropdown
const SortDropdown = styled.div`
  @media (min-width: ${screenSize.medium}) {
    display: none;
  }
`;

const SortOptions = () => {
  const sorts = ['Hot', 'New', 'Top', 'Controversial', 'Rising'];
  const dispatch = useDispatch();
  const { sortBy } = useSelector(postsSelector);

  const handleSortChanged = (sortOption: string) => {
    // Update the selected sort
    dispatch(sortByUpdated(sortOption));

    // Reset the page number now that a new sort has been selected
    dispatch(pageNumberUpdated(1));
  };

  // Check the currently selected sort option
  const isSelected = (sort: string) => {
    return sort.toUpperCase() === sortBy.toUpperCase();
  };

  // Display sort options as buttons spanning horizontally
  const sortButtons = sorts.map((sort, index) => (
    <TextButton key={index} isActive={isSelected(sort)} onClick={() => handleSortChanged(sort)}>
      {sort}
    </TextButton>
  ));

  return (
    <Container>
      {/* HorizontalSortSelection is displayed on larger screens */}
      <SortButtons>{sortButtons}</SortButtons>

      {/* SortSelectContainer is displayed on smaller screens */}
      <SortDropdown>
        <Select onOptionChanged={handleSortChanged} options={sorts} ariaLabel="Sort Select" />
      </SortDropdown>
    </Container>
  );
};

export default SortOptions;
