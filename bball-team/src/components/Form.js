import React, { useState } from "react";

const Form = (props) => {
  const [input, setInput] = useState({
    name: "",
    position: "",
    lineUp: "",
    teamType: "",
  });
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.submit(input);
    setInput({ name: "", position: "", lineUp: "", teamType: "" });
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h3>{props.teamType}</h3>
      <label htmlFor="name">
        Name:
        <input
          name="name"
          value={input.name}
          type="text"
          placeholder="Players Name"
          onChange={(e) => handleChange(e)}
        />
      </label>
      <label htmlFor="position">
        Position:
        <select
          name="position"
          value={input.position}
          type="text"
          onChange={(e) => handleChange(e)}
        >
          <option value="select-position">--Select--</option>
          <option>Guard</option>
          <option>Forward</option>
          <option>Center</option>
        </select>
      </label>
      <label htmlFor="line-up">
        Line Up:
        <select
          name="lineUp"
          value={input.lineUp}
          type="text"
          onChange={(e) => handleChange(e)}
        >
          <option value="select-line-up">--Select--</option>
          <option>Starting</option>
          <option>Backup</option>
        </select>
      </label>
      <button>+Add Player</button>
    </form>
  );
};

export default Form;
