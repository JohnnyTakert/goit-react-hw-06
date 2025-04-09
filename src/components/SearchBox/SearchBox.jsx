import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';
import { useCallback } from 'react';
import css from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters?.name ?? '');

  const onFilter = useCallback(
    item => {
      if (item) {
        dispatch(setFilter(item));
      }
    },
    [dispatch]
  );

  return (
    <div className={css.SearchBox}>
      <p className={css.label}>Find contact by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
