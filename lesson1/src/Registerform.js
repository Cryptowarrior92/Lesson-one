import React, { useState } from "react";

function Registerform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showInfo, setShowinfo] = useState("");

  const reset = (e) => {
    setShowinfo(false);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (email && password !== "") {
  //     setShowinfo(true);
  //   } else {
  //     setShowinfo(false);
  //   }
  // };
  return (
    <div>
      {!showInfo ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email && password !== "") {
              setShowinfo(true);
            } else {
              setShowinfo(false);
            }
          }}
        >
          {/* <form onSubmit={handleSubmit}> */}
          <p className="box">
            <p className="title">Registration Form</p>
            <p>
              <div className="data-field">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>

              <div className="data-field">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </p>
            <button type="submit">Submit</button>
          </p>
        </form>
      ) : (
        <p className="box2">
          <p className="title"> Your entered Data</p>
          <p>
            {`The e-mail is ${email}`}
            <p></p>
          </p>
          <p>{`The password is ${password}`}</p>
          <button onClick={reset}> Reset</button>
        </p>
      )}
    </div>
  );
}

export default Registerform;
