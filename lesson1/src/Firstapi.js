import React, { useState, useEffect, useRef } from "react";

const RandomUser = () => {
  const [userData, setUserData] = useState(null);

  // asynchronous functions

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://random-data-api.com/api/users/random_user"
      );
      console.log("response", response);
      const data = await response.json();
      console.log("data", data);
      setUserData(data);
    };

    // fetch("https://random-data-api.com/api/users/random_user")
    //   .then((res) => res.json())
    //   .then((data) => setUserData(data));

    fetchData();
    buttonRef.current.style.color = "red";
  }, []);

  const tableRef = useRef(null);
  const buttonRef = useRef(null);
  //   useRef = {current:null}

  const handleClick = () => {
    buttonRef.current.classList.toggle("btn");
    console.log(buttonRef.current.classList);
  };

  return (
    <div className="box3">
      <table ref={tableRef}>
        <tr>
          <th>Information</th>
          <th>Data from API</th>
        </tr>
        <tr>
          <td>Name</td>
          <td>
            {userData && userData.first_name} {userData && userData.last_name}
          </td>
        </tr>
        <tr>
          <td>Job Title</td>
          <td>
            {userData && userData.employment && userData.employment.title}
          </td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{userData && userData.email}</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>{userData && userData.phone_number}</td>
        </tr>
        <div className="caption">table with data from API</div>
      </table>
      <button ref={buttonRef} onClick={handleClick}>
        Button
      </button>
    </div>
  );
};

export default RandomUser;
