import React, {useState} from "react";
import styled from "styled-components";

const StyledPerson = styled.div`
    background-color: white;
    border-radius: 22px;
    width: 25%;



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