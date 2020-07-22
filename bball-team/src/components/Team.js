import React, { useState } from "react";

const Team = (props) => {
  const [input, setInput] = useState({
    name: props.team.name,
    position: props.team.position,
    lineUp: props.team.lineUp,
  });

  const [edit, setEdit] = useState(false);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.update(input);
    console.log("i am input in team.js:", input);
    setEdit(!edit);
  };
  if (edit) {
    return (
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <button>Submit Changes</button>
      </form>
    );
  }

  return (
    <div className="App" value={props.team.teamType}>
      <div>{props.team.name}</div>
      <div>{props.team.position}</div>
      <div>{props.team.lineUp}</div>
      <button onClick={(e) => setEdit(!edit)}>Edit Player</button>
    </div>
  );
};

export default Team;
