import React, {useMemo} from 'react';
import {SharedState} from "./lib";
import {useSharedState} from "./hooks";
import {Box, CheckBox, DropButton} from "grommet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

type Props = {
    sharedState: SharedState<string[]>;
    maps: string[];
    title: string;

}

export const MapListDropButton = ({sharedState, maps, title} : Props) => {
    const [state, setState] = useSharedState(sharedState);

    const addOrRemove = (map: string) => {
        const copy = state.slice();
        const index = copy.indexOf(map);
        // if we have a good index, we need to remove it
        if (index >= 0) {
            copy.splice(index, 1);
            setState(copy);
        } else {
            copy.push(map);
            setState(copy);
        }
    }

    const [hasAllMaps, hasSomeMaps] = useMemo(() => {
        let count = 0;
        for (const map of maps) {
            if (state.includes(map)) {
                count ++;
            }
        }
        return [count === maps.length, count > 0];
    }, [maps, state]);

    const toggleAllMaps = () => {
        if (hasAllMaps) {
            let copy = state.slice();
            for (const map of maps) {
                const index = copy.indexOf(map);
                if (index >= 0) {
                    copy.splice(index, 1);
                }
            }
            setState(copy);
        } else {
            let copy = state.slice();
            for (const map of maps) {
                if (!copy.includes(map)) {
                    copy.push(map);
                }
            }
            setState(copy);
        }
    }

    return (
        <Box direction="row" gap="small">
            <CheckBox checked={hasAllMaps} indeterminate={!hasAllMaps && hasSomeMaps} onChange={(event) => {
                event.stopPropagation();
                event.preventDefault();
                toggleAllMaps();
            }}/>
            <DropButton
                dropAlign={{top: 'bottom'}}
                dropProps={{round: 'small'}}
                dropContent={
                    <Box direction="column" pad="small" gap="small" background="dark-1">
                        {maps.map(map => <CheckBox key={map} checked={state.includes(map)} onChange={() => addOrRemove(map)} label={map} /> )}
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