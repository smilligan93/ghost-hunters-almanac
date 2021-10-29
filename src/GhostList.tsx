import React from 'react';
import {Ghost} from "./types/Ghost";
import {Accordion, AccordionPanel, Box, Button, Grid, Text} from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {evidenceName, iconForEvidence} from "./types/Evidence";

type Props = {
    ghosts: Ghost[];
}

export const GhostList = ({ ghosts }: Props) => {

    return (
        <Box align="center">
            <Accordion>
                {ghosts.map(ghost => (
                    <AccordionPanel label={
                        <Box
                            direction="row"
                            gap="small"
                            pad="small"
                            width={"400px"}
                            justify="between"
                            align="center"
                        >
                            <Text weight="bold" size="large">{ghost.type}</Text>
                            <Box direction="row" gap="xsmall">
                                {ghost.evidence.map((evidence) => (
                                    <Box width="20px" align="center" justify="center">
                                        <FontAwesomeIcon title={evidenceName(evidence)} size={"1x"} icon={iconForEvidence(evidence)} />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    }>
                        <Box pad={{horizontal: 'medium'}} align="center">
                            <Grid rows={["auto"]} columns={["auto", "auto"]} gap="xsmall">
                                <>
                                    <Box align="end">
                                        <Text weight="bold">Ghost:</Text>
                                    </Box>
                                    <Text>{ghost.type}</Text>
                                </>
                                <>
                                    <Box align="end">
                                        <Text weight="bold">Evidences:</Text>
                                    </Box>
                                    <Box direction="column">
                                        {ghost.evidence.map(evi =>
                                            <Box direction="row" align="center" gap="small">
                                                <Text>{evidenceName(evi)}</Text>
                                                <FontAwesomeIcon icon={iconForEvidence(evi)} />
                                            </Box>
                                       )}
                                    </Box>
                                </>
                                <>
                                    <Box align="end">
                                        <Text weight="bold">Lore:</Text>
                                    </Box>
                                    <Text><i>{ghost.description}</i></Text>
                                </>
                                <>
                                    <Box align="end">
                                        <Text weight="bold">Strength:</Text>
                                    </Box>
                                    <Text>{ghost.strength}</Text>
                                </>
                                <>
                                    <Box align="end">
                                        <Text weight="bold">Weakness:</Text>
                                    </Box>
                                    <Text>{ghost.weakness}</Text>
                                </>
                                <>
                                    <Box align="end">
                                        <Text weight="bold">Behavior:</Text>
                                    </Box>
                                    <Text>{'TODO'}</Text>
                                </>
                            </Grid>
                            <Box pad="small">
                                <Button label={"Wiki Page"} onClick={() => window.open(`https://phasmophobia.fandom.com/wiki/${ghost.type}`, '_blank')} />
                            </Box>
                        </Box>
                    </AccordionPanel>
                ))}
            </Accordion>
        </Box>
    )
}