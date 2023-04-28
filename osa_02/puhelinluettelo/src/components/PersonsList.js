
const PersonsList = ({persons}) => {
    return (
    <ul>
        {persons.map( p => <Person key={p.id} name={p.name} />)}
    </ul>
    )
}
const Person = ({name}) => {

    return (
        <li>{name}</li>
    )
}

export default PersonsList