import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'components/common/Button';

export const RouteButton = ({ to, ...props }) => {
  const history = useHistory();

  const handleClick = useCallback(() => {
    history.push(to);
  }, [history, to]);

  return <Button {...props} onClick={handleClick} />;
};
