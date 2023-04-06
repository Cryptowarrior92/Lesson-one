import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState(m);
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`ÿour name ${name}, your age ${age}, your location ${location}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={(e) => setName(e.target.value)} placeholder="Name" m />
        <input
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="Age"
        />
        <input
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Location"
        />
        <button type="submit">Submit</button>
      </form>

      <div>{name && <p>My name is {name}</p>}</div>
    </div>
  );
};

export default Form;
