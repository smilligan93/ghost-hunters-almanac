import React from 'react';
import {SharedState} from "../lib";
import {GameMap} from "../types/Map";
import {useSharedState} from "../hooks";
import {Box, Select} from "grommet";
import {Maps} from "../game/Maps";
import {MapInfo} from "./MapInfo";

type Props = {
    mapSharedState: SharedState<GameMap | undefined>;
}

export const MapBrowser = ({ mapSharedState } : Props) => {
    const [map, setMap] = useSharedState(mapSharedState);

    return (
        <Box direction="column" align="center" gap="small">
            <Select
                options={Maps}
                value={map}
                labelKey="name"
                valueKey="type"
                onChange={({option}) => setMap(option)}
            />
            {map !== undefined && <MapInfo map={map} />}
        </Box>
    )
}