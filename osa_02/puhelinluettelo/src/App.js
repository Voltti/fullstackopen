import { useState, useEffect } from 'react'
import personsService from './services/persons'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import AddNew from './components/addNew'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect( () => {
    personsService.getAll()
      .then( response => {
        setPersons(response)
      })
  }, [])

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleSearchChange = (event) => setSearchTerm(event.target.value)

  const addName = (event) => {
    event.preventDefault()
    const foundperson = persons.find(obj => obj.name.toLowerCase() === newName.toLowerCase())
    if ( foundperson !== undefined) {
      window.alert(`${newName} is already added to phonebook ${newName === foundperson.name ? `` : `(as ${foundperson.name})` }.`)
    }
  else {
    personsService.createNew({name: newName, number: newNumber})
      .then(response => {
        setPersons(persons.concat(response))
      })
    setNewName('')
    setNewNumber('')
  }

}

const removeName = (name, id) => {
  if (window.confirm(`Delete ${name}?`)) {
    personsService
      .remove(id)
      .then(response => {
        setPersons(persons.filter( p => p.id !== id))
      })
  }
}

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <AddNew addName={addName} newName={newName} newNumber={newNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} />

      <PersonsList persons={persons} search={searchTerm} removePerson={removeName}/>
    </div>
  )

}

export default App