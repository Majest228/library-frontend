import React from 'react';
import { Subscribe } from 'icons';
import { Button } from 'components/Button';
import './Promo.scss';

const Promo = () => {
  return (
    <div className="promo">
      <Subscribe className="promo__icon" width={32} height={32} />
      <p className="promo__text">Порадуйте друзей подарочной подпиской</p>
      <Button className="promo__btn" size="small" variant="outlined">
        подарить подписку
      </Button>
    </div>
  );
};

export default Promo;
