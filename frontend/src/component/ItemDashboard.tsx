import { Box, Typography } from "@mui/material"
import React from "react";

interface Props {
    title?: string,
    monney?: string,
    icon?: string,
    style?: React.CSSProperties;
}

const ItemDashboard: React.FC<Props> = (props) => {
    return (
        <Box sx={{
            backgroundColor: '#ffab40',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            borderRadius: '5px',
            ...props.style
        }}>
            <Box>
                <Typography sx={{
                    fontWeight: 600,
                    fontSize: 20
                }}>
                    {props.title}
                </Typography>

                <Typography sx={{
                    fontSize: 18
                }}>
                    {props.monney}
                </Typography>
            </Box>

            <img src={props.icon} style={{objectFit: 'contain', width: 50, height: 50}}/>
        </Box>
    )
}

export default ItemDashboard;