import { Box, TextareaAutosize, TextField } from "@mui/material";
import ViewModelCreateProduct from "../../viewmodel/create-product.viewmodel";
import ItemInputText from "../../component/ItemInputText";

const CreateProduct = () => {
    const viewmodel = ViewModelCreateProduct();
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
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
            <ItemInputText
                label="Tên sản phẩm"
                inputRef={viewmodel.refName}
                value={viewmodel.name}
                setvalue={viewmodel.setName}
                textError={viewmodel.errorName}
            />

            <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                maxRows={10}
                placeholder="Minimum 3 rows"
                style={{ width: '100%' }} />
        </Box>
    )
}

export default CreateProduct;