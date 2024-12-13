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
import { Box } from '@mui/material';
import ItemInputText from '../ItemInputText';
import ViewModelCreateCoupon from '../../viewmodel/create-coupon.viewmodel';


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

const DialogmanagerCoupon: React.FC<Props> = (props) => {
    const [value , setValue] = React.useState('');
    const ViewModel = ViewModelCreateCoupon();
    return (
        <React.Fragment>
            <BootstrapDialog
                onClose={props.onPress}
                aria-labelledby="customized-dialog-title"
                open={props.modal}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Modal title
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
                <Box>
                    <ItemInputText 
                    label='Tên mã giảm giá' 
                    inputRef={ViewModel.refName}
                    textError={ViewModel.errorName}
                    value={ViewModel.name} 
                    setvalue={ViewModel.setName} />
                    <ItemInputText 
                     label='Thể loại' 
                     inputRef={ViewModel.refCategory}
                     textError={ViewModel.errorCategory}
                     value={ViewModel.category} 
                     setvalue={ViewModel.setCategory} />
                    <ItemInputText
                     label='Số lượng mã giảm giá' 
                     inputRef={ViewModel.refQuantity}
                     textError={ViewModel.errorQuantity}
                     value={ViewModel.quantity} 
                     setvalue={ViewModel.setQuantity} />
                     <ItemInputText
                     label='Điều kiện đơn hàng' 
                     inputRef={ViewModel.refCondition}
                     textError={ViewModel.errorCondition}
                     value={ViewModel.condition} 
                     setvalue={ViewModel.setCondition} />
                    <ItemInputText
                     label='Ngày bắt đầu' 
                     inputRef={ViewModel.refStartdate}
                     value={ViewModel.startdate} 
                     textError={ViewModel.errorStartdate}
                     setvalue={ViewModel.setStartdate} />
                     <ItemInputText
                     label='Ngày kết thúc' 
                     inputRef={ViewModel.refEnddate}
                     value={ViewModel.enddate} 
                     textError={ViewModel.errorEnddate}
                     setvalue={ViewModel.setEnddate} />

                     <ItemInputText
                     label='Trạng thái' 
                     inputRef={ViewModel.refDescribe}
                     value={ViewModel.describe} 
                     textError={ViewModel.errorDescribe}
                     setvalue={ViewModel.setDescribe} />


                </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {ViewModel.createCoupon()}}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogmanagerCoupon;