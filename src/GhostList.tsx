import React from 'react';
import {Ghost} from "./types/Ghost";
import {Box, Text} from "grommet";

type Props = {
    ghosts: Ghost[];
}

export const GhostList = ({ ghosts }: Props) => {

    return (
        <Box>
            {ghosts.map(ghost => (
                <Box
                    direction="row"
                    gap="small"
                    pad="small"
                    border={{size: '1px'}}
                    width={{min: "20vw"}}
                    justify="center">
                    <Text>{ghost.type}</Text>
                </Box>
            ))}
        </Box>
    )
}