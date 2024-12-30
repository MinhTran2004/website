import { Button } from "@mui/material";

interface Props {
    label: string,
    onClick: () => void,
    styleButton?: React.CSSProperties,
    disabled?: boolean,
}

const PrimaryButton: React.FC<Props> = (props) => {
    return (
        <Button
            disabled={props.disabled}
            variant="contained"
            sx={{ width: '100%', ...props.styleButton }}
            onClick={props.onClick}
        >{props.label}</Button>
    )
}

export default PrimaryButton;