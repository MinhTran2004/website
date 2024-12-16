import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box } from '@mui/material';
import ItemInputText from '../ItemInputText';
import { Coupon } from '../../model/coupon.model';
import ViewModelCreateCoupon from '../../viewmodel/create-coupon.viewmodel';

interface Props {
    data: Coupon,
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

const DialogManagerCoupon: React.FC<Props> = (props) => {

    const viewmodel = ViewModelCreateCoupon();

    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={props.onPress}
                aria-labelledby="customized-dialog-title"
                open={props.modal}
            >
                <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center' }} id="customized-dialog-title">
                    Thay đổi thông tin sản phẩm
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
                            inputRef={viewmodel.refName}
                            value={viewmodel.name}
                            setvalue={viewmodel.setName}
                            textError={viewmodel.errorName}
                        />

                        <Box sx={{
                            display: 'flex',
                            gap: 2
                        }}>
                            <ItemInputText
                                label="Ngày bắt đầu"
                                inputRef={viewmodel.refStartdate}
                                value={viewmodel.dateStart}
                                setvalue={viewmodel.setDateStart}
                                textError={viewmodel.errorStartdate}
                            />
                            <ItemInputText
                                label="Ngày kết thúc"
                                inputRef={viewmodel.refEnddate}
                                value={viewmodel.dateEnd}
                                setvalue={viewmodel.setDateEnd}
                                textError={viewmodel.errorEnddate}
                            />
                        </Box>
                        <ItemInputText
                            label="Số lượng"
                            inputRef={viewmodel.refQuantity}
                            value={viewmodel.quantity}
                            setvalue={viewmodel.setQuantity}
                            textError={viewmodel.errorQuantity}
                        />
                        <ItemInputText
                            label="Giảm giá"
                            inputRef={viewmodel.refDiscount}
                            value={viewmodel.discount}
                            setvalue={viewmodel.setDiscount}
                            textError={viewmodel.errorDiscount}
                        />
                        <ItemInputText
                            label="Điều kiện đơn hàng"
                            inputRef={viewmodel.refCondition}
                            value={viewmodel.condition}
                            setvalue={viewmodel.setCondition}
                            textError={viewmodel.errorCondition}
                        />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {
                        // viewmodel.createProduct;
                    }}>
                        Lưu thay đổi
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogManagerCoupon;