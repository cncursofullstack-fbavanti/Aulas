import React from "react";
import User from "./User";

const UserList = () => {
  const users = [
    { name: "Mauricio", age: 35 }, 
    { name: "Fulano", age: 38 },
    { name: "Cicrano", age: 25 },
    { name: "Beltrano", age: 40 },
  ]

  return (
    <section id="users">
      <h2>Users</h2>
      <div id="userList">
        { users.map( (u, index) => { return (
          <User key={index} name={u.name} age={u.age} />
        )}) }
      </div>
      
    </section>
  )
}

export default UserList;