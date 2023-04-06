import React from "react";

let dataList = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];

// Es6 array methods
// ---map
// ---Filter
// =---sort
// ...find

const sampleString = "moshood";

console.log(sampleString.slice(1, 3));

const Mylist = () => {
  const filteredList = dataList.filter((d) => d.price.slice(1) > 1);
  console.log(filteredList);
  return (
    <div>
      {filteredList.map((g) => {
        return (
          <>
            <h1>{g.name}</h1>
          </>
        );
      })}
    </div>
  );
};

export default Mylist;

//show fruits which are >1$
//conditionals
//map through the data
//return fruits that are >1
//Set them in a state
