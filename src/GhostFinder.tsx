import React, {useMemo, useState} from 'react';
import {Evidence} from "./types/Evidence";
import { Ghosts } from "./game/Ghosts";
import {Box, Button, CheckBox, Text} from "grommet";
import {GhostList} from "./GhostList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUndo} from "@fortawesome/free-solid-svg-icons";

export const GhostFinder = () => {

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

    const [enabledEvidences, setEnabledEvidences] = useState<Evidence[]>([]);

    const possibleGhosts = useMemo(() => {
        return Ghosts.filter(ghost => {
            return enabledEvidences.reduce((allContained: boolean, evidence) => {

                return allContained && ghost.evidence.includes(evidence);
            }, true)
        })
    }, [enabledEvidences]);

    const possibleEvidences: Evidence[] = useMemo(() => {
        const evidences = new Set<Evidence>();
        for (const ghost of possibleGhosts) {
            for (const evidence of ghost.evidence) {
                evidences.add(evidence);
            }
        }
        return Array.from(evidences.values());
    }, [possibleGhosts])

    return (
        <>
            <Box direction="row" wrap margin={{bottom: 'small'}}>
                {evidenceTypes.map((evidence) =>
                    <Box pad="small">
                        <CheckBox
                            label={possibleEvidences.includes(evidence) ?
                                <Text weight="bold">{evidence}</Text> :
                                <Text style={{textDecoration: 'line-through'}}>{evidence}</Text>}
                            disabled={!possibleEvidences.includes(evidence)}
                            checked={enabledEvidences.includes(evidence)}
                            onChange={(event) => {
                                if (event.target.checked && !enabledEvidences.includes(evidence)) {
                                    setEnabledEvidences([...enabledEvidences, evidence]);
                                } else {
                                    const copy = [...enabledEvidences];
                                    const index = copy.indexOf(evidence);
                                    if (index >= 0) {
                                        copy.splice(index, 1);
                                        setEnabledEvidences(copy);
                                    }
                                }
                        }} />
                    </Box>
                )}
                <Box pad="small">
                    <Button onClick={() => setEnabledEvidences([])} title="Clear enabled evidences">
                        <FontAwesomeIcon icon={faUndo} />
                    </Button>
                </Box>
            </Box>
            <Box fill="vertical" overflow="auto">
                <GhostList ghosts={possibleGhosts} />
            </Box>
        </>
    )
}