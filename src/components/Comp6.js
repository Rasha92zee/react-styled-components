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

function Comp6() {
    return (
        <div>
            <h1>Styled Button Example</h1>
            <StyledButton>Click Me</StyledButton>
            <StyledButton>Add</StyledButton>
        </div>
    )
}

export default Comp6;