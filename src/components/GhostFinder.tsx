import React, {useMemo} from 'react';
import {Evidence} from "../types/Evidence";
import { Ghosts } from "../game/Ghosts";
import {Box, Button, Text} from "grommet";
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
            <Box direction="row" wrap align="center" justify="center" margin={{bottom: 'small'}} width={{max: '1000px'}}>
                {evidenceTypes.map((evidence) =>
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
                )}
            </Box>
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