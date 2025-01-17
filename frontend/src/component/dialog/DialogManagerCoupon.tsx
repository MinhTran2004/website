import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Typography } from '@mui/material';
import ItemInputText from '../ItemInputText';
import { Coupon } from '../../model/coupon.model';
import StatusModal from './StatusModal';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';

interface Props {
    data: Coupon,
    modal: boolean,
    onPress: () => void,
    viewmodel: any,
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const DialogManagerCoupon: React.FC<Props> = (props) => {

    React.useEffect(() => {
        props.viewmodel.setName(props.data.name);
        props.viewmodel.setQuantity(props.data.quantity);
        props.viewmodel.setDiscount(props.data.discountValue);
        props.viewmodel.setCondition(props.data.condition);
        props.viewmodel.setDescribe(props.data.describe);
        props.viewmodel.setDateStart(props.data.startDate);
        props.viewmodel.setDateEnd(props.data.endDate);
    }, [])

    const today = new Date(); 
    today.setHours(0, 0, 0, 0);

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={props.onPress}
                aria-labelledby="customized-dialog-title"
                open={props.modal}
            >
                <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }} id="customized-dialog-title">
                    Thay đổi mã giảm giá
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
                        width: 500,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 2
                    }}>
                        <ItemInputText
                            disabled
                            value={props.data._id}
                            setvalue={() => { }}
                        />
                        <ItemInputText
                            label="Tên mã giảm giá"
                            inputRef={props.viewmodel.refName}
                            value={props.viewmodel.name}
                            setvalue={props.viewmodel.setName}
                            textError={props.viewmodel.errorName}
                        />

                        <Box sx={{
                            display: 'flex',
                            gap: 2
                        }}>
                            <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: 1 }}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <DatePicker
                                            label="Chọn ngày"
                                            value={props.viewmodel.datePickStart}
                                            onChange={props.viewmodel.handleDateStart}
                                            minDate={today}
                                        />
                                        {props.viewmodel.errorStartdate && <Typography sx={{ color: 'red', fontSize: 12 }}>{props.viewmodel.errorStartdate}</Typography>}
                                    </Box>
                                </LocalizationProvider>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        <DatePicker
                                            label="Chọn ngày"
                                            value={props.viewmodel.datePickEnd}
                                            onChange={props.viewmodel.handleDateEnd}
                                            minDate={today}
                                        />
                                        {props.viewmodel.errorEnddate && <Typography sx={{ color: 'red', fontSize: 12 }}>{props.viewmodel.errorEnddate}</Typography>}
                                    </Box>
                                </LocalizationProvider>
                            </Box>
                        </Box>
                        <ItemInputText
                            label="Số lượng"
                            inputRef={props.viewmodel.refQuantity}
                            value={props.viewmodel.quantity}
                            setvalue={props.viewmodel.setQuantity}
                            textError={props.viewmodel.errorQuantity}
                            type='number'
                        />
                        <ItemInputText
                            label="Giảm giá"
                            inputRef={props.viewmodel.refDiscount}
                            value={props.viewmodel.discount}
                            setvalue={props.viewmodel.setDiscount}
                            textError={props.viewmodel.errorDiscount}
                            type='number'
                        />
                        <ItemInputText
                            label="Điều kiện đơn hàng"
                            inputRef={props.viewmodel.refCondition}
                            value={props.viewmodel.condition}
                            setvalue={props.viewmodel.setCondition}
                            textError={props.viewmodel.errorCondition}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {
                        props.viewmodel.updateCoupon(props.data._id);
                    }}>
                        Lưu thay đổi
                    </Button>
                </DialogActions>
            </BootstrapDialog>


            <StatusModal
                isModel={props.viewmodel.dialogSuccess}
                title="Thông báo"
                label="Thay đổi mã giảm giá thành công"
                layoutButton="single"
                primaryButton={{
                    label: "OK",
                    onPress: () => {
                        props.viewmodel.setDialogSuccess(!props.viewmodel.dialogSuccess);
                        props.onPress();
                    }
                }}
            />

            <StatusModal
                isModel={props.viewmodel.dialogError}
                title="Thông báo"
                label="Thay đổi mã giảm giá thất bại"
                layoutButton="single"
                primaryButton={{
                    label: "OK",
                    onPress: () => {
                        props.viewmodel.setDialogError(!props.viewmodel.dialogError);
                        props.onPress();
                    }
                }}
            />

        </React.Fragment>
    );
}

export default DialogManagerCoupon;