import { Box, Button, FormControl, FormHelperText, MenuItem, Select, TextareaAutosize, TextField, Typography } from "@mui/material";
import ViewModelCreateProduct from "../../viewmodel/create-product.viewmodel";
import ItemInputText from "../../component/ItemInputText";
import PrimaryButton from "../../component/PrimaryButton";
import StatusModal from "../../component/dialog/StatusModal";

const CreateProduct = () => {
    const viewmodel = ViewModelCreateProduct();
    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center', fontSize: 25, fontWeight: 600 }}>Tạo sản phẩm</Typography>

            <ItemInputText
                label="Tên sản phẩm"
                inputRef={viewmodel.refName}
                value={viewmodel.name}
                setvalue={viewmodel.setName}
                textError={viewmodel.errorName}
            />

            <Box sx={{ display: 'flex', gap: 1 }}>
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

            {/* <ItemInputText
                label="Thể loại sản phẩm"
                inputRef={viewmodel.refCategory}
                value={viewmodel.category}
                setvalue={viewmodel.setCategory}
                textError={viewmodel.errorCategory}
            /> */}

            <FormControl>
                <Select
                    value={viewmodel.category}
                    onChange={(text) => viewmodel.setCategory(text.target.value)}
                    displayEmpty
                    inputRef={viewmodel.refCategory}
                    inputProps={{ 'aria-label': 'Without label' }}
                >
                    <MenuItem disabled value="" >
                        <em style={{ color: "#aeb8ae" }}>-- Chọn thể loại sản phẩm --</em>
                    </MenuItem>
                    <MenuItem value={'Gà Rán'}>Gà</MenuItem>
                    <MenuItem value={'Burger'}>Burger</MenuItem>
                    <MenuItem value={'Mì'}>Mì</MenuItem>
                    <MenuItem value={'Khai tây chiên'}>Khai tây chiên</MenuItem>
                    <MenuItem value={'Nước'}>Nước</MenuItem>
                    <MenuItem value={'Pizza'}>Pizza</MenuItem>
                    <MenuItem value={'Cơm'}>Cơm</MenuItem>
                </Select>
                {viewmodel.errorCategory && <Typography sx={{ color: 'red', fontSize: 12 }}>{viewmodel.errorCategory}</Typography>}
            </FormControl>


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
                    onClick={() => {
                        viewmodel.createProduct();
                    }}
                    label="Tạo sản phẩm"
                />
                <PrimaryButton
                    onClick={() => { viewmodel.setInputNull() }}
                    label="Xóa"
                />
            </Box>

            <StatusModal
                title="Thông báo"
                label="Tạo sản phẩm thành công"
                layoutButton="single"
                primaryButton={{
                    label: "OK",
                    onPress: () => {
                        
                    }
                }}
            />

        </Box>
    )
}

export default CreateProduct;