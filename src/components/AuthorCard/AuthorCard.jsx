import React, { useState } from 'react';
import { Button } from 'components/common/Button';
import { Modal } from 'components/common/Modal';
import './AuthorCard.scss';

export const AuthorCard = ({ author }) => {
  const [open, setOpen] = useState(false);

  const handleCLose = () => setOpen(false);

  return (
    <>
      <div className="author wrapper">
        <div className="author__item">
          <img className="author__image" src={author.image} alt="" />
          <p className="author__name">{author.fullName}</p>
          <Button className="author__button" size="small" onClick={() => setOpen(true)}>
            Биография
          </Button>
        </div>
      </div>
      <Modal className="modal" open={open} onClose={handleCLose}>
        <button className="close" onClick={handleCLose}>
          <div className="close-icon">
            <div className="leftright"></div>
            <div className="rightleft"></div>
          </div>
        </button>
        <div className="modal wrapper">
          <div className="modal__title">Биография</div>
          <div className="modal__author__name">
            <b>Имя автора: </b>
            {author.fullName}
          </div>
          <div className="modal__date-of-birth">
            <b>Родился: </b>
            {author.bornDate}
          </div>
          {author.deathDate && (
            <div className="modal__date-of-death">
              <b>Умер: </b>
              {author.deathDate}
            </div>
          )}
          <div className="modal__author__biography">{author.biography}</div>
        </div>
      </Modal>
    </>
  );
};
