import { Box, Typography } from "@mui/material"

interface Props {
    title?: string,
    monney?: string,
    icon?: React.ReactNode,
}

const ItemDashboard: React.FC<Props> = (props) => {
    return (
        <Box>
            <Box>
                <Typography>
                    {props.title}
                </Typography>
                <Typography>
                    {props.monney}
                </Typography>
            </Box>

            {props.icon}
        </Box>
    )
}

export default ItemDashboard;