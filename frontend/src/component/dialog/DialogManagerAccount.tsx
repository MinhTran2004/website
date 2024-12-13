import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { FormControl, FormHelperText, MenuItem, Select, SelectChangeEvent } from '@mui/material';


interface Props {
    modal: boolean,
    onPress: () => void,
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const DialogmanagerAccount: React.FC<Props> = (props) => {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={props.onPress}
                aria-labelledby="customized-dialog-title"
                open={props.modal}
            >
                <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }} id="customized-dialog-title">
                    Cập nhật trạng thái tài khoản
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={props.onPress}
                    sx={(theme) => ({
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.grey[500],
                    })}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                            sx={{ width: 500 }}
                        >
                            <MenuItem value={10}>Đang sử dụng</MenuItem>
                            <MenuItem value={20}>Hạn chế sử dụng</MenuItem>
                        </Select>
                        {/* <FormHelperText>Without label</FormHelperText> */}
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onPress}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogmanagerAccount;