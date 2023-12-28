import React from "react";

function Person(props) {
  //   const [name, age, image] = props.person;
  console.log(props);
  return (
    <div className="flex gap-4 my-4">
      <div>
        <img src={props.image} alt={name} className="h-20 w-20 rounded-full" />
      </div>
      <div>
        <h1 className="text-xl font-bold">{props.name}</h1>
        <p className="text-2xl">{props.age}</p>
      </div>
    </div>
  );
}

export default Person;
