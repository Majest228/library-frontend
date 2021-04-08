import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import './Fade.scss';

export const Fade = ({ in: inProp = false, className, children }) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition classNames="fade" nodeRef={nodeRef} in={inProp} timeout={300} appear>
      <div className={className} ref={nodeRef}>
        {children}
      </div>
    </CSSTransition>
  );
};

Fade.propTypes = {
  in: PropTypes.bool,
};
