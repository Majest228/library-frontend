import React, { useState, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Star } from './Star';
import classes from './StarRating.module.css';

export const StarRating = ({
  count = 5,
  rating = 0,
  disabled = false,
  onChange = () => {},
  ...props
}) => {
  const [selection, setSelection] = useState(0);
  const element = useRef(null);
  const stars = useRef([]);
  const values = useMemo(() => Array.from({ length: count }, (_, index) => index + 1), [count]);
  const currentRating = selection !== 0 ? selection : rating;

  const updateSelection = value => {
    if (selection !== value) {
      setSelection(value);
    }
  };

  const resetSelection = event => {
    if (event.type === 'blur') {
      const needReset =
        element.current === null ? true : !element.current.contains(event.relatedTarget);

      if (needReset) {
        setSelection(0);
      }
    } else {
      setSelection(0);
    }
  };

  const updateRating = () => {
    if (!disabled) {
      onChange(rating !== selection ? selection : 0);
    }
  };

  const handleKeyDown = event => {
    if (!disabled) {
      const index = selection - 1;
      if (event.key === 'ArrowLeft' && selection > 1) {
        stars.current[index - 1].focus();
      }
      if (event.key === 'ArrowRight' && selection < count) {
        stars.current[index + 1].focus();
      }
    }
  };

  return (
    <div
      className={classes.rating}
      onBlur={resetSelection}
      onMouseLeave={resetSelection}
      onKeyDown={handleKeyDown}
      onClick={updateRating}
      ref={element}
      {...props}
    >
      <p className={classes.hidden}>Рейтинг {rating}</p>
      {values.map((value, index) => (
        <Star
          marked={currentRating >= value}
          aria-label={value}
          disabled={disabled}
          onFocus={() => updateSelection(value)}
          onMouseEnter={() => updateSelection(value)}
          onMouseMove={() => updateSelection(value)}
          ref={element => (stars.current[index] = element)}
          key={index}
        />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  count: PropTypes.number,
  rating: PropTypes.number,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};
