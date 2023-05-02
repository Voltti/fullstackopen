
const PersonsList = ({persons, search}) => {
    const filteredPersons = persons.filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase() ))
    return (
    <><h2>Numbers</h2>
    <ul>
        {filteredPersons.map( p => <Person key={p.id} name={p.name} number={p.number} />)}
    </ul>
    </>
    )
}
const Person = ({name, number}) => {

    return (
        <li>{name} {number}</li>
    )
}

export default PersonsList