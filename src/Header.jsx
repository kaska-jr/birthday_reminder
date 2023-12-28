import React from "react";

function Header({ totalPeople }) {
  return <div className="text-3xl py-3">{totalPeople} Birthdays Today</div>;
}

export default Header;
