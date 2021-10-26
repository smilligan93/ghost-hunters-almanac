import React from 'react';
import './App.css';
import {Box, Grommet, Header, Heading, Text} from "grommet";
import {RandomMapControls} from "./RandomMapControls";

function App() {
  return (
    <Grommet full background="dark-2">
        <Box align="center" justify="center" pad="large">
            <Heading>Ghost Hunter's Almanac</Heading>
            <RandomMapControls />
        </Box>
    </Grommet>
  );
}

export default App;
