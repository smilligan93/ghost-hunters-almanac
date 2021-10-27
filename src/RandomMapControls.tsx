import React, {useState} from 'react';
import {Box, Button, Text} from "grommet";
import {Maps} from "./Maps";
import {useNewSharedState} from "./hooks";
import {MapListDropButton} from "./MapListDropButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDice} from "@fortawesome/free-solid-svg-icons";

export const RandomMapControls = () => {
    const mapsSharedState = useNewSharedState<string[]>([]);
    const difficultySharedState = useNewSharedState<string[]>([]);

    const [map, setMap] = useState<string | undefined>(undefined);
    const [difficulty, setDifficulty] = useState<string | undefined>(undefined);

    const handleMapGenerate = () => {
        const maps = mapsSharedState.get();
        if (maps.length > 0) {
            // don't duplicate maps in a row
            let newMap;
            do {
                const randomNum = Math.floor(Math.random() * maps.length);
                newMap = maps[randomNum];
            } while (map === newMap);

            setMap(newMap);
        }
        const difficulties = difficultySharedState.get();
        if (difficulties.length > 0) {
            const randomNum = Math.floor(Math.random() * difficulties.length);
            const newDiff = difficulties[randomNum];

            setDifficulty(newDiff);
        } else {
            setDifficulty(undefined);
        }
    }

    return (
        <Box gap="medium" align="center">
            <Box direction="row" gap="medium">
                <MapListDropButton sharedState={mapsSharedState} maps={Maps.small} title="Small" />
                <MapListDropButton sharedState={mapsSharedState} maps={Maps.medium} title="Medium" />
                <MapListDropButton sharedState={mapsSharedState} maps={Maps.large} title="Large" />
                <MapListDropButton sharedState={difficultySharedState} maps={Maps.difficulties} title="Difficulty" />
            </Box>
            <Button
                label={
                    <Box direction="row" align="center" justify="center" gap="small">
                        <Text>Randomize</Text><FontAwesomeIcon icon={faDice} />
                    </Box>
                } onClick={() => handleMapGenerate()} />
            {map !== undefined &&
                <Box
                    round="small"
                    align='center'
                    justify='center'
                    pad='medium'
                    border={{size: '1px'}}
                    background="light-2"
                    width={{min: '300px'}}
                >
                    <Text>{map}</Text>{difficulty && <Text>on {difficulty}</Text>}
                </Box>
            }
        </Box>
    )
}