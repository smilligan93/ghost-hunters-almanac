import React from 'react';
import {Ghost} from "../types/Ghost";
import {Accordion, AccordionPanel, Box, Button, Grid, Text} from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {evidenceName, iconForEvidence} from "../types/Evidence";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

type Props = {
    ghosts: Ghost[];
}

export const GhostList = ({ ghosts }: Props) => {

    const ghostName = (type: string) => {
        return type.replaceAll("_", " ");
    }

    return (
        <Box align="center" width="600px" margin={{bottom: 'large'}}>
            <Accordion fill="horizontal">
                {ghosts.map(ghost => (
                    <AccordionPanel key={ghost.type} label={
                        <Box
                            direction="row"
                            gap="small"
                            pad="small"
                            fill="horizontal"
                            justify="between"
                            align="center"
                        >
                            <Text weight="bold" size="large">{ghostName(ghost.type)}</Text>
                            <Box direction="row" gap="xsmall">
                                {ghost.evidence.map((evidence) => (
                                    <Box key={evidence} width="25px" align="center" justify="center">
                                        <FontAwesomeIcon title={evidenceName(evidence)} size={"1x"} icon={iconForEvidence(evidence)} />
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    }>
                        <Box gap="small" pad={{horizontal: 'medium'}} align="center">
                            <Text size="small"><i>{ghost.description}</i></Text>
                            <Box
                                direction="row"
                                background="light-2"
                                round="xsmall"
                                justify="evenly"
                                wrap
                                border={{style: 'groove', size: '1px', color: 'dark-1'}}
                                pad={{vertical: "xsmall", horizontal: "small"}}
                            >
                                {ghost.evidence.map(evi =>
                                    <Box key={evi} margin={{horizontal: "xsmall", vertical: "xxsmall"}} direction="row" align="center" gap="small">
                                        <Text>{evidenceName(evi)}</Text>
                                        <FontAwesomeIcon icon={iconForEvidence(evi)} />
                                    </Box>
                                )}
                            </Box>
                            <Grid rows={["auto"]} columns={["auto", "auto"]} gap="xsmall">
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
                            </Grid>
                            <Box pad="small">
                                <Button
                                    label={
                                        <Box direction="row" gap="small" align="center" justify="between">
                                            <Text>Wiki Page</Text><FontAwesomeIcon icon={faArrowRight} />
                                        </Box>
                                    }
                                    onClick={() => window.open(`https://phasmophobia.fandom.com/wiki/${ghost.type}`, '_blank')}
                                />
                            </Box>
                        </Box>
                    </AccordionPanel>
                ))}
            </Accordion>
        </Box>
    )
}