import React, { useState, useEffect, useMemo } from 'react';
import { useField } from 'formik';
import { TextField } from 'components/common/TextField';
import { debouncePromise } from 'utils';
import './FilterStyles.scss';
import { CustomCheckbox } from 'components/common/CustomChecbox/CustomCheckbox';

const defaultNotFound = 'Мы не нашли данные по Вашему запросу';

export const Filter = ({
  name,
  delay = 700,
  title,
  placeholder,
  notFound,
  getEntries,
  sortItems,
  renderItem,
  disableSearch = false,
}) => {
  const [search, setSearch] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [entries, setEntries] = useState([]);
  const [field, , helpers] = useField(name);
  const debouncedGetEntries = useMemo(() => debouncePromise(getEntries, delay), [
    delay,
    getEntries,
  ]);

  const isSearchEmpty = search.length === 0;
  const checked = new Set(field.value.map(entry => entry.id));
  const list = useMemo(() => {
    const list = [...entries];
    const exists = new Set(list.map(entry => entry.id));
    const other = field.value.filter(entry => !exists.has(entry.id));

    if (isSearchEmpty) {
      list.push(...other);
      // list.sort(sortItems);
    } else {
      other.sort(sortItems);
      list.push(...other);
    }

    return list;
  }, [isSearchEmpty, entries, field.value, sortItems]);

  const handleChange = (event, entry) => {
    if (event.target.checked) {
      helpers.setValue([...field.value, entry]);
    } else {
      helpers.setValue(field.value.filter(other => other.id !== entry.id));
    }
  };

  useEffect(() => {
    (search.length === 0 ? getEntries : debouncedGetEntries)(search).then(response => {
      setLoaded(true);
      setEntries(response.data || []);
    });
  }, [search, getEntries, debouncedGetEntries]);

  return (
    <div className="block">
      <p className="block__title">{title}</p>
      {!disableSearch && (
        <TextField
          size="medium"
          value={search}
          placeholder={placeholder}
          onChange={event => setSearch(event.target.value)}
        />
      )}
      <div className="block__list">
        {loaded && entries.length === 0 && (
          <div className="block__item">
            <small>{notFound || defaultNotFound}</small>
          </div>
        )}
        {list.map(entry => (
          <label className="block__item" key={entry.id}>
            <CustomCheckbox
              type="checkbox"
              value={entry.id}
              checked={checked.has(entry.id)}
              onChange={event => handleChange(event, entry)}
            />
            {renderItem(entry)}
          </label>
        ))}
      </div>
    </div>
  );
};
