import React, {useState} from 'react';
import {Box, Button, Text} from "grommet";
import {Maps} from "./Maps";
import {useNewSharedState} from "./hooks";
import {MapListDropButton} from "./MapListDropButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDice} from "@fortawesome/free-solid-svg-icons";

export const RandomMapControls = () => {
    const sharedState = useNewSharedState<string[]>([]);

    const [map, setMap] = useState<string | undefined>(undefined);

    const handleMapGenerate = () => {
        const maps = sharedState.get();
        if (maps.length > 0) {
            // don't duplicate maps in a row
            let newMap;
            do {
                const randomNum = Math.floor(Math.random() * maps.length);
                newMap = maps[randomNum];
            } while (map === newMap);

            setMap(newMap);
        }
    }

    return (<Box gap="medium" align="center">
        <Box direction="row" gap="medium">
            <MapListDropButton sharedState={sharedState} maps={Maps.small} title="Small Maps" />
            <MapListDropButton sharedState={sharedState} maps={Maps.medium} title="Medium Maps" />
            <MapListDropButton sharedState={sharedState} maps={Maps.large} title="Large Maps" />
        </Box>
        <Button
            label={
                <Box direction="row" align="center" justify="center" gap="small">
                    Randomize<FontAwesomeIcon icon={faDice} />
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
                <Text>{map}</Text>
            </Box>
        }
    </Box>)
}