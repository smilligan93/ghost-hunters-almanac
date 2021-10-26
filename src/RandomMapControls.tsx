import React, {useState} from 'react';
import {Box, Button, CheckBox, Text} from "grommet";
import {Maps} from "./Maps";

export type RandomMapControlsProps = {

}

export const RandomMapControls = ({}: RandomMapControlsProps) => {
    const [smallEnabled, setSmallEnabled] = useState(true);
    const [mediumEnabled, setMediumEnabled] = useState(true);
    const [largeEnabled, setLargeEnabled] = useState(true);

    const [map, setMap] = useState<string | undefined>(undefined);

    const handleMapGenerate = () => {
        const maps = [];
        if (smallEnabled) {
            maps.push(...Maps.small);
        }
        if (mediumEnabled) {
            maps.push(...Maps.medium);
        }
        if (largeEnabled) {
            maps.push(...Maps.large);
        }

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
            <CheckBox checked={smallEnabled} onChange={(event) => setSmallEnabled(event.target.checked)} label="Small Maps"/>
            <CheckBox checked={mediumEnabled} onChange={(event) => setMediumEnabled(event.target.checked)} label="Medium Maps"/>
            <CheckBox checked={largeEnabled} onChange={(event) => setLargeEnabled(event.target.checked)} label="Large Maps"/>
        </Box>
        <Button label="Generate!" onClick={() => handleMapGenerate()} />
        {map !== undefined && <Box round="small" align='center' justify='center' pad='medium' border={{size: '1px'}} background="light-2" width={{min: '300px'}}><Text>{map}</Text></Box>}
    </Box>)
}