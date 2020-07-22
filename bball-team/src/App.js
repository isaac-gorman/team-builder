import React, { useState } from "react";
import Form from "./components/Form";
import Team from "./components/Team";
import "./App.css";

function App() {
  const [team, setTeam] = useState([]);

  const submit = (input) => {
    const copyTeam = [...team];
    copyTeam.push(input);
    console.log("team", copyTeam);
    return setTeam(copyTeam);
  };

  const updatePlayer = (input) => {
    // setTeam([
    //   ...team.map((player) => {
    //     console.log("update team: ", team);
    //     console.log("player: ", player);

    //     if (
    //       player.name !== input.player ||
    //       player.position !== input.position ||
    //       player.lineUp !== input.lineUp
    //     ) {
    //       return input;
    //     }
    //     return player;
    //   }),
    // ]);
    // const macthedPlayer = [
    //   ...team.filter((crrObj) => {
    //     console.log("crrObj: ", crrObj);
    //     return crrObj.name === input.name;
    //   }),
    // ];
    // console.log(macthedPlayer);
    // return setTeam(
    //   macthedPlayer.map((info) => {
    //     console.log("info:", info);
    //   })
    // );

    const teamCopy = [...team];
    console.log("I am the copy of team", team);
    console.log("I am the passed input in app.js", input);

    // I need to match the name of player I a want to edit

    setTeam(
      teamCopy.map((crrObj) => {
        if (crrObj.name !== input.name) {
          console.log("I am the matched object of the player", input);
          return input;
        }
        return crrObj;
      })
    );
  };
  return (
    <div className="App">
      <h1>3v3 Basketball Teams</h1>
      <Form teamType="Varsity Boys" submit={submit} />
      {team.map((playerInfo, index) => {
        // console.log("playerInfo: ", playerInfo);
        return <Team key={index} team={playerInfo} update={updatePlayer} />;
      })}
    </div>
  );
}

export default App;
