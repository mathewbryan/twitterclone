import React from 'react';
import './App.css';
import './Home';
import Home from './Home';
import Nav from './Nav';
import Trends from './trends';
import Feed from './tweet';


function App(){
  return(
    <div className = "screen">
      {renderScreens(0)}
      {renderScreens(1)}
      {renderScreens(2)}
    </div>
  )
}

function renderScreens(i){
  let cols = (i === 0) ? "nav-zone" : (i === 1) ? "middle" : "trends";
  let home = (i === 0) ? <Nav /> : (i === 1) ? <div><Home /><Feed /></div>  : <Trends />;
  return(
    <div className = {cols}>
      {home}
    </div>  
  )
}

export default App;