import { useState } from 'react'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

const handleNameChange = (event) => setNewName(event.target.value)

const addName = (event) => {
  event.preventDefault()
 const foundperson = persons.find(obj => obj.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
  if ( foundperson !== undefined) {
    window.alert(`${newName} is already added to phonebook ${newName === foundperson.name ? `` : `(as ${foundperson.name})` }.`)
  }
  else {
  setPersons(persons.concat({id: persons.length+1, name: newName}))
  setNewName('')
  }
}

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonsList persons={persons} />
    </div>
  )

}

export default App