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
import StatusModal from './StatusModal';

interface Props {
    data?: Order,
    modal: boolean,
    onPress: () => void,
    viewmodel: any,
    handleClick: () => void
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const DialogOrderProgress: React.FC<Props> = (props) => {

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={props.onPress}
                aria-labelledby="customized-dialog-title"
                open={props.modal}
            >
                <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }} id="customized-dialog-title">
                    Trạng thái đơn hàng
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
                        display: 'grid',
                        gap: 2,
                        padding: '10px',
                    }}>
                        <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: 2 }}>
                            <PrimaryButton
                                label='Hủy đơn hàng'
                                onClick={() => {
                                    props.viewmodel.updateStatusOrder(props.data, "Người bán đã hủy");
                                    props.onPress();
                                }}
                            />
                            <PrimaryButton
                                label='Hoàn thành đơn'
                                onClick={() => {
                                    props.viewmodel.updateQuantityProductBuy(props.data?._id);
                                    props.onPress()
                                }}
                            />
                        </Box>
                        <PrimaryButton
                            label='Xem chi tiết đơn hàng'
                            onClick={() => {
                                props.handleClick();
                                props.onPress()
                            }}
                        />
                    </Box>

                    <StatusModal
                        isModel={props.viewmodel.dialogError}
                        title="Thông báo"
                        label="Thay đổi sản phẩm thất bại"
                        layoutButton="single"
                        primaryButton={{
                            label: "OK",
                            onPress: () => {
                                props.viewmodel.setDialogError(!props.viewmodel.dialogError);
                                props.onPress();
                            }
                        }}
                    />

                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogOrderProgress;