import { useState } from 'react'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import AddNew from './components/addNew'

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
      
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <AddNew addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <PersonsList persons={persons} search={searchTerm} />
    </div>
  )

}

export default App