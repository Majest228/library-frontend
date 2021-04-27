import { useEffect, useMemo, useRef } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setPage, bulkSetBooks } from 'redux/actions';
import { BOOKS_SIZE } from 'constants/search';
import { debouncePromise } from 'utils';
import { searchBooks } from 'api';

const extractEntriesId = entries => entries.map(entry => entry.id);

const prepareValues = values => ({
  authors: extractEntriesId(values.authors),
  genres: extractEntriesId(values.genres),
  ageLimits: extractEntriesId(values.ageLimits),
  languages: extractEntriesId(values.languages),
  typeOfContent: extractEntriesId(values.typeOfContent),
  publicationDateFrom: values.years.from || null,
  publicationDateTo: values.years.to || null,
});

const usePrevious = value => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

const BooksLoader = ({ values, page, setPage, bulkSetBooks }) => {
  const loaded = useRef(false);
  const previousValues = usePrevious(values);
  const debouncedSearchBooks = useMemo(() => debouncePromise(searchBooks, 100), []);

  useEffect(() => {
    searchBooks(prepareValues(values), BOOKS_SIZE)
      .then(([request]) => request)
      .then(response => {
        loaded.current = true;
        bulkSetBooks(response.data);
      });
  }, [bulkSetBooks]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let cancel = null;

    if (loaded.current) {
      if (values !== previousValues && page !== 0) {
        setPage(0);
      } else {
        debouncedSearchBooks(prepareValues(values), BOOKS_SIZE, page)
          .then(([request, cancelation]) => {
            cancel = cancelation;
            return request;
          })
          .then(response => {
            bulkSetBooks(response.data);
          });
      }
    }

    return () => {
      if (cancel !== null) {
        cancel();
      }
    };
  }, [page, values, previousValues, setPage, bulkSetBooks, debouncedSearchBooks]);

  return null;
};

const mapStateToProps = state => ({
  page: state.books.page,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      setPage,
      bulkSetBooks,
    },
    dispatch
  ),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(BooksLoader);
