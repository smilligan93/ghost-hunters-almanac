import React from 'react';
import {GameMap} from "../types/Map";
import {Box, Image, Text} from "grommet";

type Props = {
    map: GameMap;
}

export const MapInfo = ({ map }: Props) => {

    console.log(map.images)

    return (
        <Box
            direction="column"
            gap="xsmall"
            align="center"
            round="small"
            pad={{horizontal: 'medium', vertical: 'small'}}
            border={{size: '1px'}}
        >
            <Text size="xlarge">{map.name}</Text>
            <Box direction="row" justify="center" gap="small" align="center">
                <Text size="small"><b>Keys:</b> {map.keys.map(key => key.replaceAll(' Key', '')).join(', ')}</Text>
                <Text size="small">|</Text>
                <Text size="small"><b>Size:</b> {map.size}</Text>
                <Text size="small">|</Text>
                <Text size="small">{map.floors} Floors</Text>
            </Box>
            <Box>
                {map.images.map(image => (
                    <Image
                        key={image}
                        fill
                        fit="contain"
                        src={`${process.env.PUBLIC_URL}/maps/${image}`}
                    />
                ))}
            </Box>
        </Box>
    )
}