import React, { useState } from 'react';
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
  // Use the default reddit icon if a thumbnail is not found (e.g it's a self post)
  const postThumbnail = !post.thumbnail || post.thumbnail === 'self' ? redditIcon : post.thumbnail;
  const [thumbnail, setThumbnail] = useState(postThumbnail);

  // If we do receive a url but the image fails to load then fallback.
  // We don't rely on this by default as waiting for the "onError" event would cause a slight delay.
  const onImageLoadFailed = () => {
    setThumbnail(redditIcon);
  };
  return (
    <Container>
      <Thumbnail src={thumbnail} alt="Post Thumbnail" onError={onImageLoadFailed}></Thumbnail>
      <Title>{post.title}</Title>
      <VotingControls votes={post.upvotes} />
    </Container>
  );
};

export default PostListItem;
