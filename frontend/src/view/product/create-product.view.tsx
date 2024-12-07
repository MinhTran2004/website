import { Box, Button, TextareaAutosize, TextField, Typography } from "@mui/material";
import ViewModelCreateProduct from "../../viewmodel/create-product.viewmodel";
import ItemInputText from "../../component/ItemInputText";
import PrimaryButton from "../../component/PrimaryButton";

const CreateProduct = () => {
    const viewmodel = ViewModelCreateProduct();
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Typography sx={{textAlign: 'center', fontSize: 25, fontWeight: 600}}>Tạo sản phẩm</Typography>
            <Box sx={{display: 'flex', gap: 1}}>
                <ItemInputText
                    label="Tên sản phẩm"
                    inputRef={viewmodel.refName}
                    value={viewmodel.name}
                    setvalue={viewmodel.setName}
                    textError={viewmodel.errorName}
                />
                <ItemInputText
                    label="Giá sản phẩm"
                    inputRef={viewmodel.refPrice}
                    value={viewmodel.price}
                    setvalue={viewmodel.setPrice}
                    textError={viewmodel.errorPrice}
                />
                <ItemInputText
                    label="Số lượng sản phẩm"
                    inputRef={viewmodel.refQuantity}
                    value={viewmodel.quantity}
                    setvalue={viewmodel.setQuantity}
                    textError={viewmodel.errorQuantity}
                />
            </Box>
            <ItemInputText
                label="Thể loại sản phẩm"
                inputRef={viewmodel.refCategory}
                value={viewmodel.category}
                setvalue={viewmodel.setCategory}
                textError={viewmodel.errorCategory}
            />
            <ItemInputText
                label="Ảnh sản phẩm"
                inputRef={viewmodel.refImage}
                value={viewmodel.image}
                setvalue={viewmodel.setImage}
                textError={viewmodel.errorImage}
            />

            <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                maxRows={10}
                placeholder="Minimum 3 rows"
                style={{ width: '100%' }} />

            <Box sx={{ display: 'flex', gap: 2 }}>
                <PrimaryButton
                    onClick={() => { viewmodel.createProduct() }}
                    label="Tạo sản phẩm"
                />
                <PrimaryButton
                    onClick={() => { viewmodel.setInputNull()}}
                    label="Xóa"
                />
                </Box>
            </Box>
    )
}

export default CreateProduct;