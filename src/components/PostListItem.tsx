import React from 'react';
import styled from 'styled-components/macro';
import { Post } from 'models/Post';
import { colours } from 'constants/colours';
import { screenSize } from 'constants/screenSizes';
import redditIcon from 'assets/reddit-icon.png';

interface Props {
  post: Post;
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  border: solid 2px ${colours.grey};
  border-radius: 5px;
  padding: 10px;
`;

const Thumbnail = styled.img`
  border-radius: 5px;
  width: 80px;
  height: 80px;

  @media (max-width: ${screenSize.medium}) {
    width: 60px;
    height: 60px;
  }
`;

const Title = styled.h4`
  border-radius: 5px;
  margin: 0 15px;
  color: ${colours.navy};
`;

const PostListItem = ({ post }: Props) => {
  const thumbnail = post.thumbnail !== 'self' ? post.thumbnail : redditIcon;
  // const handleImageLoadFailed = () => {
  //   post.thumbnail = ;
  // };

  return (
    <Container>
      <Thumbnail src={thumbnail} alt="Post Thumbnail"></Thumbnail>
      <Title>{post.title}</Title>
    </Container>
  );
};

export default PostListItem;
