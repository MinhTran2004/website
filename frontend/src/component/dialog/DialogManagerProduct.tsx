import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, TextareaAutosize } from '@mui/material';
import ItemInputText from '../ItemInputText';
import ViewModelCreateProduct from '../../viewmodel/create-product.viewmodel';
import { Product } from '../../model/product.model';

interface Props {
    data: Product,
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

const DialogManagerProduct: React.FC<Props> = (props) => {

    const viewmodel = ViewModelCreateProduct();

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
                            label="Tên sản phẩm"
                            placeholder={props.data.name}
                            inputRef={viewmodel.refName}
                            value={viewmodel.name}
                            setvalue={viewmodel.setName}
                            textError={viewmodel.errorName}
                        />
                        <ItemInputText
                            label="Giá sản phẩm"
                            placeholder={props.data.price}
                            inputRef={viewmodel.refPrice}
                            value={viewmodel.price}
                            setvalue={viewmodel.setPrice}
                            textError={viewmodel.errorPrice}
                        />
                        <ItemInputText
                            label="Số lượng sản phẩm"
                            placeholder={props.data.quantity}
                            inputRef={viewmodel.refQuantity}
                            value={viewmodel.quantity}
                            setvalue={viewmodel.setQuantity}
                            textError={viewmodel.errorQuantity}
                        />
                        <ItemInputText
                            label="Thể loại sản phẩm"
                            placeholder={props.data.category}
                            inputRef={viewmodel.refCategory}
                            value={viewmodel.category}
                            setvalue={viewmodel.setCategory}
                            textError={viewmodel.errorCategory}
                        />
                        <ItemInputText
                            label="Ảnh sản phẩm"
                            placeholder={props.data.image}
                            inputRef={viewmodel.refImage}
                            value={viewmodel.image}
                            setvalue={viewmodel.setImage}
                            textError={viewmodel.errorImage}
                        />
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={5}
                            maxRows={10}
                            placeholder="Mô tả sản phẩm"
                            style={{ width: '100%' }} />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {
                        console.log(props.data);
                        // viewmodel.createProduct;
                    }}>
                        Lưu thay đổi
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogManagerProduct;