import React, { Component } from 'react';
import styled from 'styled-components';


const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

function Welcome() {
    return (
    <div>
        <ColumnLeft>
        <h1>Welcome to Dash Flight</h1>
        <p>Dijkstra is here to save the day</p>
        </ColumnLeft>
    </div>
    );

}

export default Welcome;