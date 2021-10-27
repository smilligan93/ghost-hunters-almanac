import {ReactNode} from "react";
import {Box, Text} from "grommet";

type Props = {
    icon: ReactNode;
    label: string;
    link: string;
}

export const FooterItem =  ({icon, label, link}: Props) => {
    return (
        <Box direction="row" align="center" gap="xsmall" onClick={() => window.open(link, '_blank')}>
            {icon}
            <Text weight="bold">{label}</Text>
        </Box>
    )
}