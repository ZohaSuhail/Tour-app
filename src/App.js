import React from "react";
import data from './data';
import { useState } from "react";
import Tours from "./components/Tours";

const App = () => {
  const [tours, setTours] = useState(data);

  function removeHandler(id) {
    const newTours = tours.filter(tour => tour.id !== id)
    setTours(newTours);

  }
  if(tours.length===0){
    return(
      <div className="refresh">
        <h4>No Tours left</h4>
        <button className="btn-white" onClick={()=>setTours(data)}>
          Refresh
        </button>

      </div>
    )
  }

  return (
    <div>
      <Tours tours={tours} removeHandler={removeHandler}></Tours>
    </div>
  );
};

export default App;
