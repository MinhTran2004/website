import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import PrimaryButton from '../PrimaryButton';

interface Props {
    modal: boolean,
    onPress: () => void,
    detailData: any,
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

const DialogmanagerAccount: React.FC<Props> = (props) => {
    console.log(props.detailData);

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
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        width: 400,
                        padding: '20px 40px'
                    }}>
                        <PrimaryButton
                            disabled={props.detailData.status === "Đang sử dụng" ? true : false}
                            label='Đang sử dụng'
                            onClick={() => { props.viewmodel.updateStatusAccountById(props.detailData._id, 'Đang sử dụng') }} //su kien xoa
                        />
                        <PrimaryButton
                            disabled={props.detailData.status === "Đang sử dụng" ? false : true}
                            label='Hạn chế'
                            onClick={() => { props.viewmodel.updateStatusAccountById(props.detailData._id, 'Hạn chế') }} //Xac nhận
                        />
                    </Box>
                </DialogContent>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogmanagerAccount;