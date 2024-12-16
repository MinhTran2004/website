import React from "react"
import PrimaryButton from "../PrimaryButton"
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material"

interface Props {
    title?: string,
    label?: string,
    layoutButton?: 'row' | 'single',
    primaryButton?: {
        label: string,
        style?: React.CSSProperties,
        onPress: () => void,
    }
    secondaryButton?: {
        label: string,
        style?: React.CSSProperties,
        onPress: () => void
    }
}

const StatusModal: React.FC<Props> = (props) => {

    const SelectLayoutButton = () => {
        switch (props.layoutButton) {
            case 'row': return (<Box style={{ flexDirection: 'row', gap: 10 }}>
                {props.primaryButton ?
                    <PrimaryButton
                        styleButton={{ backgroundColor: '#4C1B1B' }}
                        label={props.primaryButton.label}
                        onClick={props.primaryButton.onPress} /> : <Box />}
                {props.secondaryButton ?
                    <PrimaryButton
                        styleButton={{ backgroundColor: '#4C1B1B' }}
                        label={props.secondaryButton.label}
                        onClick={props.secondaryButton.onPress} /> : <Box />}
            </Box>)

            case 'single': return props.primaryButton ?
                <PrimaryButton
                    styleButton={{ backgroundColor: '#4C1B1B', color: 'white' }}
                    label={props.primaryButton.label}
                    onClick={props.primaryButton.onPress} />
                : <Box />
            default: return null;
        }
    }

    return (
        <React.Fragment>
            <Dialog
                open={true}
                // onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Box sx={{
                    width: 400,
                    padding: 1
                }}>
                    <DialogTitle
                        id="alert-dialog-title"
                        sx={{
                            textAlign: 'center',
                            fontSize: 30,
                        }}>
                        {props.title}
                    </DialogTitle>
                    <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <DialogContentText
                            id="alert-dialog-description"
                            sx={{
                                fontSize: 18,
                                textAlign: 'center'
                            }}>
                            {props.label}
                        </DialogContentText>

                        <SelectLayoutButton />
                    </DialogContent>
                </Box>
            </Dialog>
        </React.Fragment>
    );

}

export default StatusModal;