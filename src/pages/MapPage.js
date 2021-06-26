import React, { Component } from 'react';
import styled from 'styled-components';

import Welcome from './components/Welcome'
import GoogleMap from './components/GoogleMap';


const Button = styled.span`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;


function MapPage() {
    return (
      <div>
        <Welcome />
        <Button>Get Started</Button>
        {/* <GoogleMap /> */}
      </div>
    );
  }

export default MapPage; 




