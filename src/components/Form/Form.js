import shortid from 'shortid';
import { useDispatch, useSelector } from 'react-redux';
import { recording } from 'redux/addContactSlice';

export function Form() {
  const contacts = useSelector(state => state.contact.contacts);
  const dispatch = useDispatch();

  const nameId = shortid.generate();
  const numberId = shortid.generate();

  const formSubmit = event => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const number = event.target.elements.number.value;

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
      ? alert(`Kонтакт ${name[0].toUpperCase() + name.slice(1)} уже есть`)
      : dispatch(recording({ name, number, id: shortid.generate() }));
  };

  return (
    <form onSubmit={formSubmit}>
      <h1>Phonebook</h1>
      <label htmlFor={nameId}>Имя</label>
      <input
        id={nameId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
      <label htmlFor={numberId}>Телефон</label>
      <input
        id={numberId}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      ></input>
      <button type="submit">Добавить</button>
    </form>
  );
}
export default Form;
