import { useState, useEffect } from 'react'
import axios from 'axios'
import PersonsList from './components/PersonsList'
import Filter from './components/Filter'
import AddNew from './components/addNew'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  useEffect( () => {
    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        setPersons(response.data)
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
    axios
      .post('http://localhost:3001/persons/', {name: newName, number: newNumber})
      .then(response => {
        setPersons(persons.concat(response.data))
      })
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