import React from 'react';
import './AnimalCard.css';
export default function AnimalCard(props) {
  return (
   <div className="animal-wrapper">
    <h2>{props.name}</h2>
    <h3>{props.scientificName}</h3>
    <h4>{props.size}kg</h4>
    <h4>Diet:{props.diet}</h4>
    <h4>{props.additional}</h4>
    <button onClick={() => alert("See wikipedia!")}>More Info</button>
  </div>
  );
 }