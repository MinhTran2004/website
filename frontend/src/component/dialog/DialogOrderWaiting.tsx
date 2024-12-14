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
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import PrimaryButton from '../PrimaryButton';


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

const DialogOrderWaiting: React.FC<Props> = (props) => {

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
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Thay đổi trạng thái đơn hàng
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
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        padding: '20px'
                    }}>
                        <PrimaryButton
                            label='Hủy đơn hàng'
                            onClick={() => { }} //su kien xoa
                        />
                        <PrimaryButton
                            label='Hủy đơn hàng'
                            onClick={() => { }} //Xac nhận
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onPress}>
                        Lưu thay đổi
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogOrderWaiting;