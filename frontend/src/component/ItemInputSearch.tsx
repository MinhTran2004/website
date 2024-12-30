import { Box, InputAdornment, TextField } from "@mui/material";
import PrimaryButton from "./PrimaryButton";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
    value: string,
    setValue: (text: string) => void,
    placeholder: string,
    onPressSearch: (fillter:string, text: string) => void,
    fillter: string,
}

const ItemInputSearch: React.FC<Props> = (props) => {
    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            <TextField
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                placeholder={props.placeholder}
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />
            <PrimaryButton
                label="Tìm kiếm"
                onClick={() => props.onPressSearch(props.fillter, props.value)}
                styleButton={{ maxWidth: '150px' }}
            />
        </Box>
    )
}

export default ItemInputSearch;