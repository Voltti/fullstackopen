import { useState } from 'react'
import PersonsList from './components/PersonsList'

const App = () => {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '040-1231244' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

const handleNameChange = (event) => setNewName(event.target.value)
const handleNumberChange = (event) => setNewNumber(event.target.value)
const handleSearchChange = (event) => setSearchTerm(event.target.value)

const addName = (event) => {
  event.preventDefault()
 const foundperson = persons.find(obj => obj.name.toLocaleLowerCase() === newName.toLocaleLowerCase())
  if ( foundperson !== undefined) {
    window.alert(`${newName} is already added to phonebook ${newName === foundperson.name ? `` : `(as ${foundperson.name})` }.`)
  }
  else {
  setPersons(persons.concat({id: persons.length+1, name: newName, number: newNumber}))
  setNewName('')
  setNewNumber('')
  }
}

  return (
    <div>
      <h2>Phonebook</h2>
      
      <div>filter shown with: <input value={searchTerm} onChange={handleSearchChange} /></div>

      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <PersonsList persons={persons} search={searchTerm} />
    </div>
  )

}

export default App