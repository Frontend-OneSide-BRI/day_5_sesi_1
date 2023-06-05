import React from "react";

function List({ users }) {
  return (
    <div>
      {users.map((item, idx) => (
        <h1 key={idx}>{item.email}</h1>
      ))}
    </div>
  );
}

export default List;
