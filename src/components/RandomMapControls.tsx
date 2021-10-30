import React, {useEffect, useMemo, useState} from 'react';
import {Box, Button, Text} from "grommet";
import {difficulties, Maps} from "../game/Maps";
import {useNewSharedStateWithCookie, useSharedState} from "../hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCaretDown, faCaretUp, faDice} from "@fortawesome/free-solid-svg-icons";
import {GameMap} from "../types/Map";
import {DropButtonWithOptions} from "./DropButtonWithOptions";
import {MapInfo} from "./MapInfo";
import {SharedState} from "../lib";

type Props = {
    mapSharedState: SharedState<GameMap | undefined>;
    difficultySharedState: SharedState<string | undefined>;
}

export const RandomMapControls = ({ mapSharedState, difficultySharedState }: Props) => {
    const mapsSharedState = useNewSharedStateWithCookie<string[]>([...Maps.map(map => map.name)], 'selectedMaps');
    const difficultiesSharedState = useNewSharedStateWithCookie<string[]>([...difficulties], 'selectedDifficulties');
    const showMapInfoSharedState = useNewSharedStateWithCookie<boolean>(false, 'showRandomMapInfo');

    const [mapsEmpty, setMapsEmpty] = useState(false);

    const [showMapInfo, setShowMapInfo] = useSharedState(showMapInfoSharedState);

    useEffect(() => {
        const sub = mapsSharedState.subject.subscribe(maps => {
            setMapsEmpty(maps.length === 0);
        })
        return () => sub.unsubscribe();
    }, [mapsSharedState, setMapsEmpty])

    const [map, setMap] = useSharedState(mapSharedState);
    const [difficulty, setDifficulty] = useSharedState(difficultySharedState)

    const handleMapGenerate = () => {
        const maps = mapsSharedState.get();
        if (maps.length > 0) {
            // don't duplicate maps in a row
            let newMap: string;
            do {
                const randomNum = Math.floor(Math.random() * maps.length);
                newMap = maps[randomNum];
            } while (map?.name === newMap && maps.length > 1);

            setMap(Maps.find(m => m.name === newMap));
        }
        const difficulties = difficultiesSharedState.get();
        if (difficulties.length > 0) {
            const randomNum = Math.floor(Math.random() * difficulties.length);
            const newDiff = difficulties[randomNum];

            setDifficulty(newDiff);
        } else {
            setDifficulty(undefined);
        }
    }

    const [smallMaps, mediumMaps, largeMaps] = useMemo(() => Maps.reduce(([small, medium, large], cmap) => {
        if (cmap.size === 'small') {
            small.push(cmap.name);
        } else if (cmap.size === 'medium') {
            medium.push(cmap.name);
        } else if (cmap.size === 'large') {
            large.push(cmap.name);
        }
        return [small, medium, large];
    }, [[], [], []] as [string[], string[], string[]]), [])

    return (
        <Box gap="medium" align="center">
            <Box direction="row" wrap>
                <DropButtonWithOptions sharedState={mapsSharedState} options={smallMaps} title="Small" />
                <DropButtonWithOptions sharedState={mapsSharedState} options={mediumMaps} title="Medium" />
                <DropButtonWithOptions sharedState={mapsSharedState} options={largeMaps} title="Large" />
                <DropButtonWithOptions sharedState={difficultiesSharedState} options={difficulties} title="Difficulty" />
            </Box>
            <Box>
            <Button
                primary
                disabled={mapsEmpty}
                label={
                    <Box direction="row" align="center" justify="center" gap="small">
                        <Text>Randomize</Text><FontAwesomeIcon icon={faDice} />
                    </Box>
                } onClick={() => handleMapGenerate()} />
                {mapsEmpty && <Text color="status-error" size="small">Please select at least 1 map</Text> }
            </Box>
            {map !== undefined &&
                <Box gap="small" align="center">
                    <Box
                        flex={false}
                        round="small"
                        align='center'
                        justify='center'
                        border={{size: '1px'}}
                        background="accent-2"
                        width={{min: '300px'}}
                    >
                        <Box align="center" pad={{vertical: 'xsmall', horizontal: 'small'}}>
                            <Text>{map.name}</Text>{difficulty && <Text>on {difficulty}</Text>}
                        </Box>
                        <Box
                            round={{corner: 'bottom', size: 'small'}}
                            fill="horizontal"
                            border={{size: '1px', side: 'top'}}
                            align="center"
                            onClick={(event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                setShowMapInfo(!showMapInfo)
                            }}
                        >
                            <FontAwesomeIcon icon={showMapInfo ? faCaretDown : faCaretUp} />
                        </Box>
                    </Box>
                    {showMapInfo &&
                        <MapInfo map={map} />
                    }
                </Box>
            }
        </Box>
    )
}