import React from 'react';
import {Box, Grid, Grommet, Heading, Tab, Tabs} from "grommet";
import {RandomMapControls} from "./RandomMapControls";
import { PageFooter } from './PageFooter';
import {CookiesProvider} from "react-cookie";
import {GhostFinder} from "./GhostFinder";

function App() {
    return (
      <CookiesProvider>
          <Grommet full background="dark-2" >
              <Grid rows={['flex', 'auto']} columns={['auto']} fill={"vertical"}>
                  <Box align="center" pad="large" overflow="auto">
                      <Heading level="2">Ghost Hunter's Almanac</Heading>
                      <Tabs>
                          <Tab title="Random Map">
                              <Box pad={{top: 'small'}}>
                                  <RandomMapControls />
                              </Box>
                          </Tab>
                          <Tab title="Ghost Helper">
                              <Box pad={{top: 'small'}}>
                                  <GhostFinder />
                              </Box>
                          </Tab>
                      </Tabs>
                  </Box>
                  <PageFooter />
              </Grid>
          </Grommet>
      </CookiesProvider>
    );
}

export default App;
