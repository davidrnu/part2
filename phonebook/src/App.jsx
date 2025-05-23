import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import Persons from "./components/Persons";
import PersonForm from "./components/PersonForm";
import personService from "./services/persons";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getAll().then((persons) => {
      setPersons(persons);
    });
  }, []);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notifMsg, setNotifMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const addPerson = (event) => {
    event.preventDefault();

    if (newName === "" || newNumber === "")
      alert("Please complete all the fields");

    if (persons.find((person) => person.name === newName.trim()) != undefined) {
      if (
        window.confirm(
          `${newName.trim()} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const id = persons.find((person) => person.name === newName.trim())?.id;
        const updatedObject = {
          name: newName.trim(),
          number: newNumber.trim(),
        };
        personService.update(id, updatedObject).then((response) => {
          setPersons(
            persons.map((person) => (person.id === id ? response : person))
          );
          setNotifMsg(`${newName} was updated successfully.`);
          setTimeout(() => {
            setNotifMsg(null);
          }, 5000);
          setNewName("");
          setNewNumber("");
        });
      }
    } else {
      const newObject = {
        name: newName.trim(),
        number: newNumber.trim(),
      };
      personService.create(newObject).then((response) => {
        setPersons(persons.concat(response));
        setNotifMsg(`${newName} was added successfully.`);
        setTimeout(() => {
          setNotifMsg(null);
        }, 5000);
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFilterChange = (event) => setFilter(event.target.value);
  const handleDelete = (event) => {
    const id = event.target.classList[0];
    const personToDelete = persons.find((person) => person.id === id);
    if (window.confirm(`Delete ${personToDelete.name} ?`)) {
      personService
        .deletePerson(id)
        .then((response) => {
          console.log(response)
          setPersons(persons.filter((person) => person.id !== id));
        })
        .catch((error) => {
          console.log(error);
          setErrorMsg(`${personToDelete.name} was already deleted`);
          setTimeout(() => {
            setErrorMsg(null);
          }, 5000);
        });
    }
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().startsWith(filter.toLowerCase())
  );

  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notifMsg} type="ok"/>
      <Notification message={errorMsg}/>

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
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
