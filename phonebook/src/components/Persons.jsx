const Person = ({ name, number, id, handleDelete }) => {
  return (
    <p>
      {name} {number} <button onClick={handleDelete} className={id}>delete</button>
    </p>
  );
};

const Persons = ({ persons, handleDelete }) => {

  return persons.map((person) => (
    <Person
      key={person.id}
      name={person.name}
      number={person.number}
      id={person.id}
      handleDelete={handleDelete}
    />
  ));
};

export default Persons;
