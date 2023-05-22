import { useState, useEffect } from 'react';
import personsService from './services/persons';
import PersonsList from './components/PersonsList';
import Filter from './components/Filter';
import AddNew from './components/addNew';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [notificationMsg, setNotificationMsg] = useState(null);
  const [notificationType, setNotificationType] = useState('notification');

  useEffect(() => {
    personsService.getAll().then(response => {
      setPersons(response);
    });
  }, []);

  const handleNameChange = event => setNewName(event.target.value);
  const handleNumberChange = event => setNewNumber(event.target.value);
  const handleSearchChange = event => setSearchTerm(event.target.value);
  const notifyMsg = (msg, type = 'notification') => {
    setNotificationMsg(msg);
    setNotificationType(type);
    setTimeout(() => {
      setNotificationMsg(null);
    }, 2500);
  };

  const addName = event => {
    event.preventDefault();
    const foundperson = persons.find(
      obj => obj.name.toLowerCase() === newName.toLowerCase()
    );
    if (foundperson !== undefined) {
      if (
        window.confirm(
          `${newName} is already added to phonebook${
            newName !== foundperson.name ? ` as ${foundperson.name}` : ''
          }, replace the old number with a new one?`
        )
      ) {
        foundperson.number = newNumber;
        personsService.update(foundperson).then(response => {
          // console.log(response)
          setPersons(
            persons.filter(p => (p.id !== response.id ? p : response))
          );
          notifyMsg(`Number changed for ${foundperson.name}`);
          setNewName('');
          setNewNumber('');
        });
      }
    } else {
      personsService
        .createNew({ name: newName, number: newNumber })
        .then(response => {
          setPersons(persons.concat(response));
          notifyMsg(`Added ${newName} to phonebook`);
          setNewName('');
          setNewNumber('');
        });
    }
  };

  const removeName = (name, id) => {
    if (window.confirm(`Delete ${name}?`)) {
      personsService
        .remove(id)
        .then(response => {
          setPersons(persons.filter(p => p.id !== id));
          notifyMsg(`${name} removed from phonebook`);
        })
        .catch(error => {
          if (error.response.status === 404) {
            notifyMsg(
              `Information of ${name} has already been removed from server`,
              'error notification'
            );
            setPersons(persons.filter(p => p.id !== id));
          }
        });
    }
  };

  return (
    <div>
      <Notification
        notificationMsg={notificationMsg}
        notificationType={notificationType}
      />
      <h2>Phonebook</h2>

      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <AddNew
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />

      <PersonsList
        persons={persons}
        search={searchTerm}
        removePerson={removeName}
      />
    </div>
  );
};

export default App;
