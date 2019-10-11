import React from "react";
import styled from "../../../starwars/node_modules/styled-components";

const StyledPerson = styled.div`
    background-color: rgba(255, 151, 19, .2);
    border-radius: 22px;
    width: 25%;
    margin-bottom: 2%;
    margin-right: 2%


`



function Person(props) {

    return(
        
        <StyledPerson>
            <h2>{props.character}</h2>
            <p>{props.birth_year}</p>
            <p>{props.hair_color}</p>
            <p>{props.height}</p>
            <p>{props.mass}</p>
        </StyledPerson>
        

    )

}

export default Person;