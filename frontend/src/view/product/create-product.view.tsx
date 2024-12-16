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
                    <MenuItem value={'Chicken'}>Chicken</MenuItem>
                    <MenuItem value={'Burger'}>Hamburger</MenuItem>
                    <MenuItem value={'French fries'}>French fries</MenuItem>
                    <MenuItem value={'Drink'}>Drink</MenuItem>
                    <MenuItem value={'Pizza'}>Pizza</MenuItem>
                    <MenuItem value={'Rice'}>Rice</MenuItem>
                    <MenuItem value={'Noodles'}>Noodles</MenuItem>
                    <MenuItem value={'Cake'}>Cake</MenuItem>
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
                onChange={(text) => { viewmodel.setDescribe(text.target.value) }}
                placeholder="Minimum 3 rows"
                style={{ width: '100%' }} />
            {viewmodel.errorDescribe && <Typography sx={{ color: 'red', fontSize: 12 }}>{viewmodel.errorDescribe}</Typography>}

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
                isModel={viewmodel.dialogSuccess}
                title="Thông báo"
                label="Tạo sản phẩm thành công"
                layoutButton="single"
                primaryButton={{
                    label: "OK",
                    onPress: () => {
                        viewmodel.setDialogSuccess(!viewmodel.dialogSuccess)
                    }
                }}
            />

            <StatusModal
                isModel={viewmodel.dialogError}
                title="Thông báo"
                label="Tạo sản phẩm thất bại"
                layoutButton="single"
                primaryButton={{
                    label: "OK",
                    onPress: () => {
                        viewmodel.setDialogError(!viewmodel.dialogError)
                    }
                }}
            />

        </Box>
    )
}

export default CreateProduct;