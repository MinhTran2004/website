import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import PrimaryButton from '../PrimaryButton';
import { Order } from '../../model/order.model';


interface Props {
    data?: Order,
    modal: boolean,
    onPress: () => void,
    viewmodel: any
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
    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={props.onPress}
                aria-labelledby="customized-dialog-title"
                open={props.modal}
            >
                <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }} id="customized-dialog-title">
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
                        padding: '10px',
                        width: 450
                    }}>
                        <PrimaryButton
                            label='Hủy đơn hàng'
                            onClick={() => {
                                props.viewmodel.updateStatusOrder(props.data, "Người bán đã hủy");
                                props.onPress();
                            }}
                        />
                        <PrimaryButton
                            label='Xác nhận đơn hàng'
                            onClick={() => {
                                props.viewmodel.updateStatusOrder(props.data, "Hoàn thành");
                                props.onPress()
                            }}
                        />
                    </Box>
                </DialogContent>
                {/* <DialogActions>
                    <Button autoFocus onClick={props.onPress}>
                        Lưu thay đổi
                    </Button>
                </DialogActions> */}
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogOrderWaiting;