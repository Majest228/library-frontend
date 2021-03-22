import React from 'react';
import { Intro } from 'components/Intro';
import { StarRating } from 'components/StarRating';

export const Home = () => (
  <>
    <Intro />
    <StarRating rating={4} />
  </>
);
