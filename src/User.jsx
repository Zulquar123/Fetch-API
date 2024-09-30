import React from "react";

export default function User({ userData }) {
  const style = "border-2 border-black rounded-xl w-[20%] m-auto mt-2 text-center";
  const { id, name, email } = userData;
  return (
    <div className={style}>
      <h1>User Id : {id}</h1>
      <h1>User Name : {name}</h1>
      <h1>User Email : {email}</h1>
    </div>
  );
}
