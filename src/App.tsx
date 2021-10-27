import React from 'react';
import {Box, Footer, Grid, Grommet, Heading} from "grommet";
import {RandomMapControls} from "./RandomMapControls";
import { PageFooter } from './PageFooter';

function App() {
  return (
    <Grommet full background="dark-2" >
        <Grid rows={['flex', 'auto']} columns={['auto']} fill={"vertical"}>
            <Box align="center" pad="large">
                <Heading>Ghost Hunter's Almanac</Heading>
                <RandomMapControls />
            </Box>
            <PageFooter />
        </Grid>
    </Grommet>
  );
}

export default App;
