import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Portal = ({ children, parent, className }) => {
  const element = React.useMemo(() => document.createElement('div'), []);

  useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body;

    if (className !== undefined) {
      element.className = className;
    }

    target.appendChild(element);

    return () => {
      target.removeChild(element);
    };
  }, [element, parent, className]);

  return ReactDOM.createPortal(children, element);
};
