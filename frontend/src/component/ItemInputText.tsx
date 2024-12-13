import { Box, TextField, Typography, InputLabelProps as MuiInputLabelProps } from "@mui/material";
import React from "react";

interface Props {
    label: string;
    value: string;
    setvalue: (text: string) => void;
    textError: string;
    inputRef: React.RefObject<HTMLInputElement>;
    styteLayout?: React.CSSProperties;
    type?: string;  // Thêm thuộc tính `type` vào giao diện Props
    InputLabelProps?: MuiInputLabelProps;  // Sử dụng InputLabelProps của MUI
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
                type={props.type || "text"}  // Sử dụng thuộc tính 'type' nếu có, nếu không thì mặc định là 'text'
                sx={props.styteLayout}
                InputLabelProps={props.InputLabelProps}  // Truyền InputLabelProps vào đây
            />
            {props.textError && <Typography sx={{ color: 'red', fontSize: 12 }}>{props.textError}</Typography>}
        </Box>
    );
};

export default ItemInputText;
