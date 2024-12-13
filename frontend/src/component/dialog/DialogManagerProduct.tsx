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
                    <ItemInputText setvalue={()=> {}} />
                    <ItemInputText setvalue={()=> {}} />
                    <ItemInputText setvalue={()=> {}} />
                    <ItemInputText setvalue={()=> {}} />
                    <ItemInputText setvalue={()=> {}} />
                    <ItemInputText setvalue={()=> {}} />
                    <ItemInputText setvalue={()=> {}} />

                </Box>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onPress}>
                        Save changes
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </React.Fragment>
    );
}

export default DialogManagerProduct;