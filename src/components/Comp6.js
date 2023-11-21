import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2980b9;
  }
`;

const StyledDiv = styled.div`
  background-color: lightblue;
  color: black;
  font-size: 20px;
  padding:20px
  border-radius:5px;
  height:600px;
  margin: 20px;
`;

function Comp6() {
  return (
    <div>
      <h1>Using Styled Components</h1>
      <StyledDiv>
        <h3>Styled Button Example</h3>
        <StyledButton>Click Me</StyledButton>
        <StyledButton>Add</StyledButton>
      </StyledDiv>
    </div>
  )
}

export default Comp6;