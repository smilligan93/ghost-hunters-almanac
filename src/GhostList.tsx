import React from 'react';
import {Ghost} from "./types/Ghost";
import {Box, Text} from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {iconForEvidence} from "./types/Evidence";

type Props = {
    ghosts: Ghost[];
}

export const GhostList = ({ ghosts }: Props) => {

    return (
        <Box align="center">
            {ghosts.map(ghost => (
                <Box
                    direction="row"
                    gap="small"
                    pad="small"
                    border={{size: '1px'}}
                    width={"400px"}
                    justify="between"
                    align="center"
                >
                    <Text weight="bold" size="large">{ghost.type}</Text>
                    <Box direction="row" gap="xsmall">
                        {ghost.evidence.map((evidence) => (
                            <FontAwesomeIcon title={evidence.replaceAll('_', ' ')} size={"1x"} icon={iconForEvidence(evidence)} />
                        ))}
                   </Box>
                </Box>
            ))}
        </Box>
    )
}