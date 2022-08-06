import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import { filter } from 'redux/addContactSlice';

export default function Search() {
  const dispatch = useDispatch();

  const searchInput = shortid.generate();
  return (
    <div>
      <h2>Контакты</h2>
      <label htmlFor={searchInput}>Поиск контактов</label>
      <input
        id={searchInput}
        onChange={event => dispatch(filter(event.target.value))}
      ></input>
    </div>
  );
}
