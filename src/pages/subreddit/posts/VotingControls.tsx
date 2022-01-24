import React from 'react';
import styled from 'styled-components/macro';
import { colours } from 'constants/colours';
import { ArrowIosUpwardOutline as UpArrowIcon } from '@styled-icons/evaicons-outline/ArrowIosUpwardOutline';
import { ArrowIosDownwardOutline as DownArrowIcon } from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline';

interface Props {
  votes: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpvoteIcon = styled(UpArrowIcon)`
  color: ${colours.orange};
`;

const DownvoteIcon = styled(DownArrowIcon)`
  color: ${colours.orange};
`;

const UpvotesText = styled.span`
  color: ${colours.navy};
  margin: 11px 0;
  font-size: 0.9rem;
`;

const VoteButton = styled.button`
  background-color: ${colours.lightOrange};
  height: 30px;
  width: 50px;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:focus {
    border: solid 2px ${colours.orange};
    border-color: ${colours.orange};
    outline: ${colours.orange};
  }

  &:hover {
    transform: translateY(-1px);
  }
`;

const VotingControls = ({ votes }: Props) => {
  return (
    <Container>
      <VoteButton title="Feature not yet available" aria-label="Upvote Button">
        <UpvoteIcon size={32} />
      </VoteButton>
      <UpvotesText>{votes}</UpvotesText>
      <VoteButton title="Feature not yet available" aria-label="Downvote Button">
        <DownvoteIcon size={32} />
      </VoteButton>
    </Container>
  );
};

export default VotingControls;
