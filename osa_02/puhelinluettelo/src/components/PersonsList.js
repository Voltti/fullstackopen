
const PersonsList = ({persons, search, removePerson}) => {
    const filteredPersons = persons.filter(p => p.name.toLowerCase().includes(search.toLowerCase() ))
    return (
    <><h2>Numbers</h2>
    <ul>
        {filteredPersons.map( p => <Person key={p.id} name={p.name} number={p.number} removePerson={() => removePerson(p.name, p.id)}/>)}
    </ul>
    </>
    )
}
const Person = ({name, number, removePerson}) => {
    return (
        <li>{name} {number} <button onClick={removePerson}>Delete</button></li>
    )
}

export default PersonsList