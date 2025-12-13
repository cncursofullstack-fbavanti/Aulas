import React from "react";

const User = (props) => {
  return (
    <div className="user">
      <dl>
        <dt>Name:</dt>
        <dd>{props.name}</dd>
        <dt>Age:</dt>
        <dd>{props.age}</dd>
      </dl>
    </div>
  )
}

export default User;