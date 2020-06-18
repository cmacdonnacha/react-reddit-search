import React from 'react';
import styled from 'styled-components/macro';
import { Post } from 'models/Post';
import { colours } from 'constants/colours';
import { screenSize } from 'constants/screenSizes';
import redditIcon from 'assets/reddit-icon.png';
import VotingControls from './VotingControls';

interface Props {
  post: Post;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: solid 2px ${colours.grey};
  border-radius: 5px;
  padding: 12px;
  margin: 10px 0;

  @media (min-width: ${screenSize.medium}) {
    margin-right: 20px;

    &:hover {
      background-color: ${colours.grey};
      box-shadow: 0 8px 6px -6px ${colours.grey};
    }
  }
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  width: 100px;
  height: 100px;
`;

const Title = styled.h4`
  border-radius: 5px;
  margin: 0 15px;
  color: ${colours.navy};
  display: flex;
  flex: 2;
`;

const PostListItem = ({ post }: Props) => {
  const thumbnail = post.thumbnail !== 'self' ? post.thumbnail : redditIcon;

  return (
    <Container>
      <Thumbnail src={thumbnail} alt="Post Thumbnail"></Thumbnail>
      <Title>{post.title}</Title>
      <VotingControls votes={post.upvotes} />
    </Container>
  );
};

export default PostListItem;
