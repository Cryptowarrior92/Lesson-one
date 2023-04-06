import React from "react";

const Displaydata = () => {
  const myInfo = {
    name: "fabian",
    hobby: "coding",
    sport: "soccer",
    favColor: ["red", "yellow"],
  };

  const array = [
    1,
    2,
    3,
    4,
    5,
    {
      name: "fabian",
      hobby: "coding",
      sport: "soccer",
    },
    ["moshood", "fabian"],
  ];
  return (
    <div>
      <p>My name is {myInfo.name}</p>
      <p> My hobby is {myInfo.hobby}</p>
      <p> My sport is {myInfo["sport"]}</p>
      <p> My favColor is {myInfo["favColor"][1]}</p>
      <p> My favColor is {myInfo.favColor[0]}</p>
    </div>
  );
};

export default Displaydata;
