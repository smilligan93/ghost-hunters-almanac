import React from 'react';
import {Box, Grid, Grommet, Heading} from "grommet";
import {RandomMapControls} from "./RandomMapControls";
import { PageFooter } from './PageFooter';
import {CookiesProvider} from "react-cookie";

function App() {
  return (
      <CookiesProvider>
          <Grommet full background="dark-2" >
              <Grid rows={['flex', 'auto']} columns={['auto']} fill={"vertical"}>
                  <Box align="center" pad="large">
                      <Heading>Ghost Hunter's Almanac</Heading>
                      <RandomMapControls />
                  </Box>
                  <PageFooter />
              </Grid>
          </Grommet>
      </CookiesProvider>
  );
}

export default App;
