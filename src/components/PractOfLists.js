import React from "react";

function PractOfLists() {
  const fruitlists = ["Mango", "Banana", "Apple", "Grapes", "Orange"];
  const users = [
    { id: 1, name: "Ali", age: 30 },
    { id: 2, name: "Ahmed", age: 25 },
    { id: 3, name: "Ayesha", age: 28 },
    { id: 4, name: "Zainab", age: 32 },
  ];
  return (
    <div>
      {fruitlists.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}

      {users.map((item, index) => {
        return (
          <p key={item.id}>
            My name is {item.name} and my age is {item.age}
          </p>
        );
      })}
    </div>
  );
}

export default PractOfLists;
