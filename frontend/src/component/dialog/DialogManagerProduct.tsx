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
import ViewModelManageProduct from '../../viewmodel/manager-product.viewmodel';
import StatusModal from './StatusModal';
import { data } from 'react-router-dom';

interface Props {
    data: Product,
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

const DialogManagerProduct: React.FC<Props> = (props) => {

    React.useEffect(() => {
        props.viewmodel.setName(props.data.name);
        props.viewmodel.setPrice(props.data.price);
        props.viewmodel.setQuantity(props.data.quantity);
        props.viewmodel.setCategory(props.data.idCategory);
        props.viewmodel.setImage(props.data.image);
        props.viewmodel.setDescribe(props.data.describe);
    }, [props.data])

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
                            inputRef={props.viewmodel.refName}
                            value={props.viewmodel.name}
                            setvalue={props.viewmodel.setName}
                            textError={props.viewmodel.errorName}
                        />
                        <ItemInputText
                            label="Giá sản phẩm"
                            inputRef={props.viewmodel.refPrice}
                            value={props.viewmodel.price}
                            setvalue={props.viewmodel.setPrice}
                            textError={props.viewmodel.errorPrice}
                            type='number'
                        />
                        <ItemInputText
                            label="Số lượng sản phẩm"
                            inputRef={props.viewmodel.refQuantity}
                            value={props.data.quantity}
                            setvalue={props.viewmodel.setQuantity}
                            textError={props.viewmodel.errorQuantity}
                            type='number'
                        />
                        <ItemInputText
                            label="Thể loại sản phẩm"
                            inputRef={props.viewmodel.refCategory}
                            value={props.viewmodel.category}
                            setvalue={props.viewmodel.setCategory}
                            textError={props.viewmodel.errorCategory}
                        />
                        <ItemInputText
                            label="Ảnh sản phẩm"
                            inputRef={props.viewmodel.refImage}
                            value={props.data.image}
                            setvalue={props.viewmodel.setImage}
                            textError={props.viewmodel.errorImage}
                        />
                        <TextareaAutosize
                            aria-label="minimum height"
                            minRows={5}
                            maxRows={10}
                            value={props.data.describe}
                            onChange={(text) => props.viewmodel.setDescribe(text.target.value)}
                            placeholder="Mô tả sản phẩm"
                            style={{ width: '100%' }} />
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={() => {
                        props.viewmodel.updateProduct(props.data._id);
                    }}>
                        Lưu thay đổi
                    </Button>
                </DialogActions>
            </BootstrapDialog>

            <StatusModal
                isModel={props.viewmodel.dialogSuccess}
                title="Thông báo"
                label="Thay đổi sản phẩm thành công"
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
                label="Thay đổi đơn hàng thất bại"
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

export default DialogManagerProduct;