import React from "react";
import Person from "./Person";

function People({ people }) {
  console.log(people);
  return (
    <>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </>
  );
}

export default People;
