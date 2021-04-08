import React from 'react';
import PropTypes from 'prop-types';
import { Grow } from 'components/animations/Grow';
import { StrokedStar, FilledStar } from 'icons';
import classes from './Star.module.css';

export const Star = React.forwardRef(({ size = 16, marked = false, ...props }, forwardedRef) => (
  <button className={classes.star} ref={forwardedRef} {...props}>
    <div className={classes.wrapper}>
      <StrokedStar className={classes.icon} width={size} height={size} />
      <Grow className={classes.grow} in={marked} duration={100}>
        <FilledStar className={classes.icon} width={size} height={size} />
      </Grow>
    </div>
  </button>
));

Star.displayName = 'Star';

Star.propTypes = {
  size: PropTypes.number,
  marked: PropTypes.bool,
};
