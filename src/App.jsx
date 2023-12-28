import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Button from "./Button";
import People from "./People";
import { peopleData } from "./peopledata";

export default function App() {
  const totalPersons = peopleData.length;
  const [totalPeople, setTotalPersons] = useState(totalPersons);
  const [people, setPeople] = useState(peopleData);

  return (
    <div className="bg-red-200 min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[600px] bg-white mx-auto flex flex-col items-center p-10">
        <div className="w-full">
          <Header totalPeople={totalPeople} />
          <People people={people} />
        </div>
        <div
          onClick={() => {
            setTotalPersons((prevState) => {
              return 0;
            });
            setPeople([]);
          }}
          className="w-full"
        >
          <Button />
        </div>
      </div>
    </div>
  );
}
