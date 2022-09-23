import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Cards from './components/Cards';
import Data from './Data';

function App() {
  const cardElements = Data.map((cards)=>{
    return(
    <Cards
      img = {cards.img}
      locationIcon = {cards.locationIcon}
      country = {cards.country}
      view = {cards.view}
      placeName = {cards.placeName}
      dateVisited = {cards.dateVisited}
      description = {cards.description}
    />
    )
  });

  return (
    <div className="App-container">
     <Navbar/>
    
     <section>
     {cardElements}
     
     </section>
    </div>
  );
}

export default App;
