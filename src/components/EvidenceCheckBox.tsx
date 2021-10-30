import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {Evidence, evidenceName, iconForEvidence} from "../types/Evidence";
import {Box, CheckBox, Text} from "grommet";

type Props = {
    enabled: boolean;
    disabled: boolean;
    possible: boolean;
    evidence: Evidence;
    onEnable: () => void;
    onDisable: () => void;
    onClear: () => void;
}

export const EvidenceCheckBox = ({ enabled, disabled, evidence, possible, onDisable, onEnable, onClear } : Props) => {

    return (
        <Box
            key={evidence}
            unselectable={"on"}
            pad="small"
            onContextMenu={(event) => {
                event.preventDefault();
                event.stopPropagation();
                if (disabled) {
                    onClear();
                } else {
                    onDisable();
                }
            }}
        >
            <CheckBox
                label={
                    <>
                        <Text
                            weight="bold"
                            color={ enabled ? 'accent-1' : disabled ? 'dark-4' : undefined}
                            style={(disabled || !possible) ? {textDecoration: 'line-through'} : undefined}>
                            {evidenceName(evidence)}&nbsp;
                            <FontAwesomeIcon icon={iconForEvidence(evidence)} />
                        </Text>
                    </>
                }
                disabled={!possible}
                checked={enabled}
                onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    if (!enabled && !disabled) {
                        onEnable();
                    } else if (enabled && !disabled) {
                        onDisable();
                    } else if (disabled) {
                        onClear();
                    }
                }}
            />
        </Box>
    )
}