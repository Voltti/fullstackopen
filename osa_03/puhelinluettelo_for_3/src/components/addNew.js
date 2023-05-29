const AddNew = ({addName, newName, newNumber, handleNameChange, handleNumberChange}) => {

    return(
        <>
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
        </>
    )
}

export default AddNew