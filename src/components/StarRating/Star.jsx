import React from 'react';
import PropTypes from 'prop-types';
import { Grow } from 'components/Grow';
import { StrokedStar, FilledStar } from 'icons';
import classes from './Star.module.css';

export const Star = React.forwardRef(({ marked = false, ...props }, forwardedRef) => (
  <button className={classes.star} ref={forwardedRef} {...props}>
    <div className={classes.wrapper}>
      <StrokedStar className={classes.icon} width={24} height={24} />
      <Grow className={classes.grow} in={marked} duration={100}>
        <FilledStar className={classes.icon} width={24} height={24} />
      </Grow>
    </div>
  </button>
));

Star.displayName = 'Star';

Star.propTypes = {
  marked: PropTypes.bool,
};
