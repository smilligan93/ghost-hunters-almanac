import React, {useMemo} from 'react';
import {SharedState} from "../lib";
import {useSharedState} from "../hooks";
import {Box, CheckBox, DropButton} from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
    sharedState: SharedState<string[]>;
    options: string[]
    title: string;

}

export const DropButtonWithOptions = ({sharedState, options, title} : Props) => {
    const [state, setState] = useSharedState(sharedState);

    const addOrRemove = (difficulty: string) => {
        const copy = state.slice();
        const index = copy.indexOf(difficulty);
        // if we have a good index, we need to remove it
        if (index >= 0) {
            copy.splice(index, 1);
            setState(copy);
        } else {
            copy.push(difficulty);
            setState(copy);
        }
    }

    const [hasAll, hasSome] = useMemo(() => {
        let count = 0;
        for (const diff of options) {
            if (state.includes(diff)) {
                count ++;
            }
        }
        return [count === options.length, count > 0];
    }, [state, options]);

    const toggleAllMaps = () => {
        if (hasAll) {
            let copy = state.slice();
            for (const map of options) {
                const index = copy.indexOf(map);
                if (index >= 0) {
                    copy.splice(index, 1);
                }
            }
            setState(copy);
        } else {
            let copy = state.slice();
            for (const map of options) {
                if (!copy.includes(map)) {
                    copy.push(map);
                }
            }
            setState(copy);
        }
    }

    return (
        <Box direction="row" gap="small" pad="small">
            <CheckBox checked={hasAll} indeterminate={!hasAll && hasSome} onChange={(event) => {
                event.stopPropagation();
                event.preventDefault();
                toggleAllMaps();
            }}/>
            <DropButton
                dropAlign={{top: 'bottom'}}
                dropProps={{round: 'small'}}
                dropContent={
                    <Box direction="column" pad="small" gap="small" background="dark-1">
                        {options.map(diff => <CheckBox key={diff} checked={state.includes(diff)} onChange={() => addOrRemove(diff)} label={diff} /> )}
                    </Box>
                }
            >
                <Box
                    direction="row"
                    align="center"
                    justify="center"
                    gap="small"
                    border={{side: 'bottom'}}
                >
                    {title}
                    <FontAwesomeIcon icon={faCaretDown} />
                </Box>
            </DropButton>
        </Box>
    );
}
