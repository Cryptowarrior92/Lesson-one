import React from "react";

const Conditional = () => {
  // conditionally render our UI
  let content;
  let name = "moshood";

  //   if (name == "moshood") {
  //     content = <p>This is moshood</p>;
  //   } else {
  //     content = <p>This is john</p>;
  //   }
  return (
    <div>
      {name == "moshood" ? <p>this is moshood</p> : <p>This is john</p>}
      {/* {name == "moshood" && <p>This is moshood</p>} */}
    </div>
  );
};

export default Conditional;
