import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { Portal } from 'components/common/Portal';
import { noop } from 'utils';
import classes from './Modal.module.scss';

export const Modal = ({ className, open, children, onClose = noop }) => {
  const backdrop = useRef(null);
  const wrapper = useRef(null);

  useEffect(() => {
    document.body.style.setProperty('overflow-y', open ? 'hidden' : 'auto');
    const scrollbarWidth = window.innerWidth - (backdrop.current || document.body).clientWidth;
    document.body.style.setProperty('padding-right', open ? `${scrollbarWidth}px` : '0');
  }, [open]);

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  const handleClick = event => {
    if (event.target.contains(wrapper.current)) {
      onClose();
    }
  };

  return (
    <>
      {open && (
        <Portal>
          <div className={classes.backdrop} onClick={handleClick} ref={backdrop}>
            <div className={clsx(classes.modal, className)} ref={wrapper}>
              {children}
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};
