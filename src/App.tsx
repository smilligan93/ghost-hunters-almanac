import React from 'react';
import {Box, Grid, Grommet, Tab, Tabs, Text} from "grommet";
import {RandomMapControls} from "./components/RandomMapControls";
import { PageFooter } from './components/PageFooter';
import {CookiesProvider} from "react-cookie";
import {GhostFinder} from "./components/GhostFinder";
import {Theme} from "./Theme";
import {useNewSharedState} from "./hooks";
import {GameMap} from "./types/Map";
import {Evidence} from "./types/Evidence";
import {MapBrowser} from "./components/MapBrowser";

function App() {

    const mapSharedState = useNewSharedState<GameMap | undefined>(undefined);
    const difficultySharedState = useNewSharedState<string | undefined>(undefined);
    const enabledEvidenceSharedState = useNewSharedState<Evidence[]>([]);
    const disabledEvidenceSharedState = useNewSharedState<Evidence[]>([]);

    return (
      <CookiesProvider>
          <Grommet full background="dark-2" theme={Theme}>
              <Grid rows={['auto', 'flex', 'auto']} columns={['auto']} fill={"vertical"}>
                  <Box pad="small" align="center" background="dark-1" direction="row" justify="center">
                          <Text size="xlarge"><i>Ghost Hunter's Almanac</i></Text>
                  </Box>
                  <Box align="center" pad="large" overflow="auto">
                      <Tabs>
                          <Tab title="Random Map">
                              <Box pad={{top: 'small'}}>
                                  <RandomMapControls
                                      mapSharedState={mapSharedState}
                                      difficultySharedState={difficultySharedState}
                                  />
                              </Box>
                          </Tab>
                          <Tab title="Evidence">
                              <Box pad={{top: 'small'}}>
                                  <GhostFinder
                                      enabledEvidenceSharedState={enabledEvidenceSharedState}
                                      disabledEvidenceSharedState={disabledEvidenceSharedState}
                                  />
                              </Box>
                          </Tab>
                          <Tab title="Map Browser">
                              <Box pad={{top: 'small'}}>
                                  <MapBrowser mapSharedState={mapSharedState} />
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
