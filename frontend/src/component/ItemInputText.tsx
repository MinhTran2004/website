import { Box, TextField, Typography } from "@mui/material"
import React from "react"

interface Props {
    label: string,
    value: string,
    setvalue: (text: string) => void,
    textError: string,
    inputRef: React.RefObject<HTMLInputElement>
    styteLayout?: React.CSSProperties,
}

const ItemInputText: React.FC<Props> = (props) => {
    return (
        <Box sx={{ flex: 1 }}>
            <TextField
                label={props.label}
                value={props.value}
                fullWidth
                onChange={(e) => { props.setvalue(e.target.value) }}
                inputRef={props.inputRef}
                sx={props.styteLayout}
            />
            {props.textError && <Typography sx={{ color: 'red', fontSize: 12 }}>{props.textError}</Typography>}
        </Box>
    )
}

export default ItemInputText;