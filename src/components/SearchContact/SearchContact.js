import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/addContactSlice';

export default function SearchContact() {
  const contacts = useSelector(state => state.contact.contacts);
  const filter = useSelector(state => state.contact.filter);
  const dispatch = useDispatch();

  const searchContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <table>
        {searchContact.map(contact => {
          const { id, name, number } = contact;
          return (
            <tbody key={id}>
              <tr>
                <th>{name}</th>
                <th>{number}</th>
                <th>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(deleteContact(id));
                    }}
                  >
                    удалить
                  </button>
                </th>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
