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
import ViewModelCreateProduct from '../../viewmodel/create-product.viewmodel';


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

const checknull = (value:string) => {
    // check 
}

const DialogManagerProduct: React.FC<Props> = (props) => {
    const [value , setValue] = React.useState('');
    const ViewModel = ViewModelCreateProduct();
    checknull(value);

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
                <Box>
                    <ItemInputText 
                    label='Tên sản phẩm' 
                    inputRef={ViewModel.refName}
                    textError={ViewModel.errorName}
                    value={ViewModel.name} 
                    setvalue={ViewModel.setName} />
                    <ItemInputText 
                    label='Giá sản phẩm' 
                    inputRef={ViewModel.refPrice}
                    textError={ViewModel.errorPrice}
                    value={ViewModel.price}
                    setvalue={ViewModel.setPrice} />
                    <ItemInputText 
                     label='Thể loại sản phẩm' 
                     inputRef={ViewModel.refCategory}
                     textError={ViewModel.errorCategory}
                     value={ViewModel.category} 
                     setvalue={ViewModel.setCategory} />
                    <ItemInputText
                     label='Ảnh sản phẩm' 
                     inputRef={ViewModel.refImage}
                     textError={ViewModel.errorImage}
                     value={ViewModel.image} 
                     setvalue={ViewModel.setImage} />
                    <ItemInputText
                     label='Mô tả sản phẩm' 
                     inputRef={ViewModel.refDescribe}
                     value={ViewModel.describe} 
                     textError={ViewModel.errorDescribe}
                     setvalue={ViewModel.setDescribe} />
                    <ItemInputText setvalue={()=> {}} />

                </Box>
                </DialogContent>
                <DialogActions>
                    <Button  autoFocus onClick={() =>{ ViewModel.createProduct()}}>
                        Save changes
                        
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogManagerProduct;