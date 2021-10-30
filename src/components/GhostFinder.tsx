import React, {useMemo} from 'react';
import {Evidence} from "../types/Evidence";
import { Ghosts } from "../game/Ghosts";
import {Box, Button, Grid, Text} from "grommet";
import {GhostList} from "./GhostList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import {removeFromArray, SharedState} from "../lib";
import {useSharedState} from "../hooks";
import {EvidenceCheckBox} from "./EvidenceCheckBox";

type Props = {
    enabledEvidenceSharedState: SharedState<Evidence[]>;
    disabledEvidenceSharedState: SharedState<Evidence[]>;
}

export const GhostFinder = ({ enabledEvidenceSharedState, disabledEvidenceSharedState }: Props) => {

    const evidenceTypes: Evidence[] = useMemo(() => {
        const evidences: Evidence[] = [];
        for (const ghost of Ghosts) {
            for (const evidence of ghost.evidence) {
                if (!evidences.includes(evidence)) {
                    evidences.push(evidence);
                }
            }
        }
        evidences.sort((a, b) => a.localeCompare(b));
        return evidences;
    }, [])

    const [enabledEvidences, setEnabledEvidences] = useSharedState(enabledEvidenceSharedState);
    const [disabledEvidences, setDisabledEvidences] = useSharedState(disabledEvidenceSharedState);

    const possibleGhosts = useMemo(() => {
        return Ghosts.filter(ghost => {
            const hasEnabled = enabledEvidences.reduce((allContained: boolean, evidence) => {

                return allContained && ghost.evidence.includes(evidence);
            }, true);
            if (hasEnabled) {
                const hasDisabled = disabledEvidences.reduce((anyContained: boolean, evidence) => {

                    return anyContained || ghost.evidence.includes(evidence);
                }, false);
                return hasEnabled && !hasDisabled;
            }
            return hasEnabled;
        })
    }, [enabledEvidences, disabledEvidences]);

    const possibleEvidences: Evidence[] = useMemo(() => {
        const evidences = new Set<Evidence>();
        for (const ghost of possibleGhosts) {
            for (const evidence of ghost.evidence) {
                evidences.add(evidence);
            }
        }
        // must include the disabledEvidences here, otherwise we can't re-enable them
        for (const evi of disabledEvidences) {
            evidences.add(evi);
        }
        return Array.from(evidences.values());
    }, [possibleGhosts, disabledEvidences])

    return (
        <Box align="center">
            <Grid
                margin={{bottom: 'small'}}
                rows={['auto', 'auto', 'auto', 'auto']}
                columns={['auto', 'auto']}
                gap="small"
                align="center"
                areas={[
                    { name: 'EMF_Level_5', start: [0, 0], end: [0, 0] },
                    { name: 'DOTS_Projector', start: [1, 0], end: [1, 0] },
                    { name: 'Fingerprints', start: [0, 1], end: [0, 1] },
                    { name: 'Ghost_Orb', start: [1, 1], end: [1, 1] },
                    { name: 'Ghost_Writing', start: [0, 2], end: [0, 2] },
                    { name: 'Spirit_Box', start: [1, 2], end: [1, 2]},
                    { name: 'Freezing_Temperature', start: [0, 3], end: [1, 3] }
                ]}
            >
                {evidenceTypes.map((evidence) =>
                    <Box gridArea={evidence}>
                        <EvidenceCheckBox
                            enabled={enabledEvidences.includes(evidence)}
                            disabled={disabledEvidences.includes(evidence)}
                            possible={possibleEvidences.includes(evidence)}
                            evidence={evidence}
                            onEnable={() => {
                                setEnabledEvidences([...enabledEvidences, evidence]);
                                setDisabledEvidences(removeFromArray(disabledEvidences, evidence));
                            }}
                            onDisable={() => {
                                setEnabledEvidences(removeFromArray(enabledEvidences, evidence));
                                setDisabledEvidences([...disabledEvidences, evidence]);
                            }} onClear={() => {
                            setEnabledEvidences(removeFromArray(enabledEvidences, evidence));
                            setDisabledEvidences(removeFromArray(disabledEvidences, evidence));
                        }}
                        />
                    </Box>
                )}
            </Grid>

            {/*<Box direction="row" wrap align="center" justify="center" margin={{bottom: 'small'}} width={{max: '1000px'}}>
                {evidenceTypes.map((evidence) =>
                    <EvidenceCheckBox
                        key={evidence}
                        enabled={enabledEvidences.includes(evidence)}
                        disabled={disabledEvidences.includes(evidence)}
                        possible={possibleEvidences.includes(evidence)}
                        evidence={evidence}
                        onEnable={() => {
                            setEnabledEvidences([...enabledEvidences, evidence]);
                            setDisabledEvidences(removeFromArray(disabledEvidences, evidence));
                        }}
                        onDisable={() => {
                            setEnabledEvidences(removeFromArray(enabledEvidences, evidence));
                            setDisabledEvidences([...disabledEvidences, evidence]);
                        }} onClear={() => {
                            setEnabledEvidences(removeFromArray(enabledEvidences, evidence));
                            setDisabledEvidences(removeFromArray(disabledEvidences, evidence));
                        }}
                    />
                )}
            </Box>*/}
            <Button
                primary
                onClick={() => {
                    setEnabledEvidences([]);
                    setDisabledEvidences([]);
                }}
                title="Clear enabled evidences"
                label={
                    <Box width="100px" direction="row" justify="center" align="center">
                        <Text>Clear</Text>
                        &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faUndo} />
                    </Box>
                }
            />
            <Box fill="vertical" overflow="auto" margin={{top: 'small'}}>
                <GhostList ghosts={possibleGhosts} enabledEvidence={enabledEvidences} />
            </Box>
        </Box>
    )
}