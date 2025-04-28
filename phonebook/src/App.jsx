import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]);
  
  useEffect(() => {
    personService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find((person) => person.name === newName) != undefined)
      alert(`${newName} is already on the list`);
    else if (newName === "") alert(`name is empty`)
    else {
      const newObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      };
      
      personService
        .create(newObject)
        .then(response => {
          setPersons(persons.concat(response))
          setNewName("")
          setNewNumber("")
        })
      

      setNewName("");
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter inputValue={filter} valueHandler={handleFilterChange} />

      <h2>add a new</h2>
      <PersonForm
        formOnSubmit={addPerson}
        nameValue={newName}
        nameValueHandler={handleNameChange}
        numberValue={newNumber}
        numberValueHandler={handleNumberChange}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  );
};

export default App;
