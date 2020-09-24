// does Component need to be imported for CatList?
import React from 'react';

// props needs to be passed
// export, extend component?
const CatList = (props) => {
  // console.log("CatList props:", props)
  return (
    <div>
      <h3>Hello from CatList</h3>
      {/* // should 'Map' be lowercase? */}
      {/* // because props name passed is 'cats', 'breeds' to 'cats' */}
      {/* // alter the map function so it can display the cat breed names */}
      {/* // React will complain if we do not assign a key to each value in the mapping */}
      {props.cats.map((cat, index) => <li key={index}>{cat}</li>)}
    </div>
  )
}

// needs to be exported
export default CatList;
