import React from 'react';
import {Evidence, evidenceName, iconForEvidence} from "../types/Evidence";
import {Box, Text} from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export type GhostEvidenceBoxProps = {
    evidences: Evidence[];
    discoveredEvidences?: Evidence[];
}

export const GhostEvidenceBox = (props: GhostEvidenceBoxProps) => {
    const { evidences, discoveredEvidences } = props;
    return (
        <>
            <Box direction="row" gap="xsmall">
                {evidences.map((evidence) => (
                    <Box key={evidence} width="25px" align="center" justify="center" >
                        <Text color={discoveredEvidences?.includes(evidence) ? 'accent-1' : undefined}>
                            <FontAwesomeIcon title={evidenceName(evidence)} size={"1x"} icon={iconForEvidence(evidence)} />
                        </Text>
                    </Box>
                ))}
            </Box>
        </>
    );
};