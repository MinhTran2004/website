import { Button } from "@mui/material"
import React from "react";

interface Props {
    label: string,
    onPress?: () => void,
    styleButton?: React.CSSProperties,
    styleText?: React.CSSProperties,
}

const PrimatyButton: React.FC<Props> = (props) => {
    return (
        <Button variant="text"
            sx={{
                width: '100%',
                fontSize: 16,
                backgroundColor: '#FFA21A',
                padding: '11px 20px 11px 20px',
                borderRadius: '10px',
                color: '#121110',
                fontWeight: 600,
                fontFamily: 'Inter',
                ...props.styleButton,
                ...props.styleText,
            }}
            onClick={props.onPress}>
            {props.label}
        </Button>
    )
}

export default PrimatyButton;