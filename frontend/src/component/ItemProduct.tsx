import { Box, Typography } from "@mui/material";

interface Props {
    image: string,
    name: string,
    price: string,
    quantityCart: string,
    category: string,
}

const ItemProduct: React.FC<Props> = (props) => {
    return (
        <Box sx={{ display: 'flex', marginBottom: 2 }}>
            <img src={props.image} width={100} height={80} alt="" />
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '0 10px'
            }}
            >
                <Box>
                    <Typography sx={{ fontSize: 20 }}>{props.name}</Typography>
                    <Typography sx={{ fontSize: 15 }}>{props.category}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between'}}>
                    <Typography>{props.price}</Typography>
                    <Typography fontSize={20}>x {props.quantityCart}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default ItemProduct;