import React from 'react';
import {Ghost} from "../types/Ghost";
import {Accordion, AccordionPanel, Box, Button, Text} from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Evidence, evidenceName, iconForEvidence} from "../types/Evidence";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {GhostEvidenceBox} from "./GhostEvidenceBox";

type Props = {
    ghosts: Ghost[];
    enabledEvidence: Evidence[];
}

export const GhostList = ({ ghosts, enabledEvidence }: Props) => {

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
                            <GhostEvidenceBox evidences={ghost.evidence} discoveredEvidences={enabledEvidence} />
                        </Box>
                    }>
                        <Box gap="small" pad={{horizontal: 'medium'}} align="center">
                            <Text size="small"><i>{ghost.description}</i></Text>
                            <Box
                                direction="row"
                                background="accent-2"
                                round="xsmall"
                                justify="evenly"
                                wrap
                                border={{size: '1px', color: 'dark-1'}}
                                pad={{vertical: "xsmall", horizontal: "small"}}
                            >
                                {ghost.evidence.map(evi =>
                                    <Box key={evi} margin={{horizontal: "small", vertical: "xxsmall"}} direction="row" align="center" gap="xsmall">
                                        <Text>{evidenceName(evi)}</Text>
                                        <FontAwesomeIcon icon={iconForEvidence(evi)} />
                                    </Box>
                                )}
                            </Box>
                            <Box direction="column" align="start" fill="horizontal">
                                <b>Strengths</b>
                                <Text><i>{ghost.strength}</i></Text>
                                <br />
                                <b>Weaknesses</b>
                                <Text><i>{ghost.weakness}</i></Text>
                                <br />
                                <b>Tips and Strategies</b>
                                <ul style={{marginTop: '2px'}}>
                                    {ghost.tips?.map(tip => <li key={tip}>{tip}</li>)}
                                </ul>
                            </Box>
                            <Box pad={{bottom: 'small'}}>
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