import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";


const App = () => {//{id}
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [character, setCharacter] = useState(1)


  useEffect(() => {
    // const fetchCharacter = (id) => 
    // fetch(`https://swapi.co/api/people/1/`)
    // .then(response => response.json())
    // .then(item => {
    //   console.log(item)
    //   setCharacter(item.name)
    // })

    
    axios.get(`https://swapi.co/api/people/1/`)
    .then(response => {
      console.log(response)
      let info = response.data;
      setCharacter(info.name)
    })

  }, []) //id
 

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h2>{character}</h2>
    </div>
  );
}

export default App;
