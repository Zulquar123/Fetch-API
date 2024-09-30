import React, { useEffect, useState } from "react";
import User from "./User";

export default function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  return (
    <div>
      {user.map((userData) => (
        <User userData={userData} />
      ))}
    </div>
  );
}
