import { Box, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";

interface Props {
    title: string,
    value: string,
    inputRef: React.RefObject<HTMLInputElement>,
    setValue: (text: string) => void,
    placeholder: string,
    textError: string,
}

const ItemInputText: React.FC<Props> = (props) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            backgroundColor: '#0c1017'
        }}>
            <FormLabel sx={{ fontWeight: 600, color: 'white' }}>{props.title}</FormLabel>
            <TextField
                placeholder={props.placeholder}
                fullWidth
                inputRef={props.inputRef}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                sx={{
                    backgroundColor: '#05070a',
                    borderRadius: '10px',
                    '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none',
                        },
                        '& .MuiOutlinedInput-input':{
                            color: 'white'
                        },
                        '& .MuiInputBase-input::placeholder': {
                            color: '#808080',
                        },
                    },
                }} />
            {props.textError && <Typography sx={{ color: 'red', fontSize: 12, backgroundColor: '#0c1017' }}>{props.textError}</Typography>}
        </Box>
    )
}

export default ItemInputText;