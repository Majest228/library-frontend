import React, { useState, useEffect, useCallback, useMemo } from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import { TextField } from 'components/common/TextField';
import { debounce, debouncePromise } from 'utils';
import { simpleSearch } from 'api';
import './Search.scss';

export const Search = ({ className }) => {
  const [needle, setNeedle] = useState('');
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const debouncedSimpleSearch = useMemo(() => debouncePromise(simpleSearch, 500), []);
  const resetSearch = useMemo(
    () =>
      debounce(() => {
        setNeedle('');
        setItems([]);
      }, 50),
    []
  );

  const updateNeedle = useCallback(event => setNeedle(event.target.value), []);

  const openSearch = useCallback(() => setFocused(true), []);

  const closeSearch = useCallback(() => setFocused(false), []);

  const afterClose = useCallback(
    event => {
      if (!event.target.classList.contains('search__popup--visible')) {
        resetSearch();
      }
    },
    [resetSearch]
  );

  useEffect(() => {
    let cancel = null;

    if (needle.length >= 3) {
      setLoading(true);
      debouncedSimpleSearch(needle)
        .then(([request, cancelation]) => {
          cancel = cancelation;
          return request;
        })
        .then(response => {
          setLoading(false);
          setItems(response.data || []);
        });
    }

    return () => {
      if (cancel !== null) {
        cancel();
      }
    };
  }, [needle, debouncedSimpleSearch]);

  const isFound = needle.length > 0 && items.length > 0;
  const isNotFound = needle.length > 0 && items.length === 0;
  const popupVisible = loading || isFound || (!loading && isNotFound);

  return (
    <div className={clsx('search', className)}>
      <TextField
        className="search__input"
        placeholder="Начните поиск"
        value={needle}
        onChange={updateNeedle}
        onFocus={openSearch}
        onBlur={closeSearch}
      />
      <div
        className={clsx('search__popup', focused && popupVisible && 'search__popup--visible')}
        onTransitionEnd={afterClose}
      >
        {!loading && isNotFound && <p className="search__message">Мы ничего не нашли</p>}
        {loading && <p className="search__message">Загрузка...</p>}
        <div className="search__items">
          {!loading &&
            items.length > 0 &&
            items.map(item => (
              <NavLink className="search__item" to={`/book/${item.id}`} key={item.id}>
                <img className="search__item-image" src={item.image} alt="" />
                <div className="search__item-wrapper">
                  <p className="search__item-title">{item.name}</p>
                  <div className="search__item-line">
                    <p className="search__item-author">{item.author}</p>
                    <span className="search__item-dot" aria-hidden="true">
                      •
                    </span>
                    <p className="search__item-genre">{item.genre}</p>
                  </div>
                </div>
              </NavLink>
            ))}
        </div>
      </div>
    </div>
  );
};
