import React, { useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { Transition } from 'react-transition-group';

const defaultStyles = duration => ({
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'scale(0)',
});

const transitionStyles = {
  entering: { transform: 'scale(1)' },
  entered: { transform: 'scale(1)' },
  exiting: { transform: 'scale(0)' },
  exited: { transform: 'scale(0)' },
};

export const Grow = ({ in: inProp = false, duration = 300, className, children, ...props }) => {
  const nodeRef = useRef(null);
  const defaultStyle = useMemo(() => defaultStyles(duration), [duration]);

  return (
    <Transition nodeRef={nodeRef} in={inProp} timeout={duration} {...props}>
      {state => (
        <div
          className={className}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          ref={nodeRef}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

const { timeout, ...transitionPropTypes } = Transition.propTypes;

Grow.propTypes = {
  className: PropTypes.string,
  ...transitionPropTypes,
};
