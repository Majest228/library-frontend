import React from 'react';
import PropTypes from 'prop-types';
import { IconButton } from 'components/IconButton';
import { StrokedHeart, FilledHeart } from 'icons';

export const LikeButton = ({ liked = false, ...props }) => {
  const Icon = liked ? FilledHeart : StrokedHeart;

  return (
    <IconButton {...props}>
      <Icon width="100%" height="100%" />
    </IconButton>
  );
};

LikeButton.propTypes = {
  liked: PropTypes.bool,
};
