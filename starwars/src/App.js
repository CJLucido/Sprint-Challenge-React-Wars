import React, {useState, useEffect} from 'react';
import './App.css';
import axios from "axios";
import styled from "styled-components";
import Person from "./components/Person"


const App = () => {//{id}

const StyledApp = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 5%

`
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  // const [character, setCharacter] = useState(1);
  // const [birth_year, setBirthYear] = useState(1);
  // const [hair_color, setHairColor] = useState(1);
  // const [height, setHeight] = useState(1);
  // const [mass, setMass] = useState(1);
  
  function useFetchChar(){
    const [peopleList, setPeopleList] = useState([]);
      useEffect(() => {
      axios.get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response)
        setPeopleList(response.data.results)
      });
      }, []);
      return peopleList;
    }
    const newInfo = useFetchChar();

    

  // useEffect(() => {
    
  //   axios.get(`https://swapi.co/api/people/1/`)
  //   .then(response => {
  //     console.log(response)
  //     let info = response.data;
  //     setCharacter(info.name);
  //     setBirthYear(info.birth_year)
  //     setHairColor(info.hair_color)
  //     setHeight(info.height)
  //     setMass(info.mass)
  //   })
  //   .catch(err => {
  //     console.log("Give in to your feelings", err)
  //   })

  // }, []) //id

  // axios.get(`https://swapi.co/api/people`)
  //   .then(response => {
  //     let pathChar = response.data.url;
  //   })




  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <StyledApp>
      {
      newInfo.map((person, index)=> (<Person key={index} character ={person.name} birth_year= {person.birth_year} hair_color= {person.hair_color} height={person.height} mass={person.mass}/>))
    }
      </StyledApp>
    </div>
  );
}

export default App;
