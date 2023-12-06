import React from 'react';
import {animals} from './Data';
import AnimalCard from './AnimalCard';
import './App.css';
function App() {
return (
  <div className="wrapper">
  <h1>Animals from Stepanov</h1>
   {animals.map(animal => (
   <AnimalCard
    key={animal.name}
    name={animal.name}
    additional={animal.additional}
    diet={animal.diet}
    scientificName={animal.scientificName}
    size={animal.size}
   />
   ))}
  </div>
 )
}

export default App;