import { Box, Button, TextareaAutosize, Typography } from "@mui/material";
import ViewModelCreateCoupon from "../../viewmodel/create-coupon.viewmodel";
import ItemInputText from "../../component/ItemInputText";
import PrimaryButton from "../../component/PrimaryButton";

const CreateCoupon = () => {
    const viewmodel = ViewModelCreateCoupon();

    const handleCreateCoupon = () => {
        // Perform the coupon creation process using the viewmodel
        viewmodel.createCoupon();
    };

    const handleReset = () => {
        // Reset input fields to their initial state
        viewmodel.setInputNull();
    };

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center', fontSize: 25, fontWeight: 600 }}>
                Tạo mã giảm giá
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }}>
                <ItemInputText
                    label="Tên mã giảm giá"
                    inputRef={viewmodel.refName}
                    value={viewmodel.name}
                    setvalue={viewmodel.setName}
                    textError={viewmodel.errorName}
                />
                <ItemInputText
                    label="Thể loại"
                    inputRef={viewmodel.refdiscountType}
                    value={viewmodel.discountType}
                    setvalue={viewmodel.setdiscountType}
                    textError={viewmodel.errordiscountType}
                />
            </Box>

            <ItemInputText
                label="Số lượng"
                inputRef={viewmodel.refQuantity}
                value={viewmodel.quantity}
                setvalue={viewmodel.setQuantity}
                textError={viewmodel.errorQuantity}
            />
            <ItemInputText
                label="Giảm giá"
                inputRef={viewmodel.refDiscount}
                value={viewmodel.discount}
                setvalue={viewmodel.setDiscount}
                textError={viewmodel.errorDiscount}
            />
            <ItemInputText
                label="Giá trị tối đa"
                inputRef={viewmodel.refmaxDisCount}
                value={viewmodel.maxDisCount}
                setvalue={viewmodel.setmaxDisCount}
                textError={viewmodel.errormaxDisCount}
            />
            <ItemInputText
                label="Điều kiện đơn hàng"
                inputRef={viewmodel.refCondition}
                value={viewmodel.condition}
                setvalue={viewmodel.setCondition}
                textError={viewmodel.errorCondition}
            />
            <ItemInputText
                label="Ảnh"
                inputRef={viewmodel.refImage}
                value={viewmodel.image}
                setvalue={viewmodel.setImage}
                textError={viewmodel.errorImage}
            />

            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                <ItemInputText
                    label="Ngày bắt đầu"
                    inputRef={viewmodel.refStartdate}
                    value={viewmodel.startdate}
                    setvalue={viewmodel.setStartdate}
                    textError={viewmodel.errorStartdate}
                    type="date"
                    styteLayout={{ flex: 1 }}
                    InputLabelProps={{ shrink: true }} // Đảm bảo label luôn ở trên input khi sử dụng type="date"
                />
                <ItemInputText
                    label="Ngày kết thúc"
                    inputRef={viewmodel.refEnddate}
                    value={viewmodel.enddate}
                    setvalue={viewmodel.setEnddate}
                    textError={viewmodel.errorEnddate}
                    type="date"
                    styteLayout={{ flex: 1 }}
                    InputLabelProps={{ shrink: true }} // Đảm bảo label luôn ở trên input khi sử dụng type="date"
                />
            </Box>



            <ItemInputText
                label="Mô tả"
                inputRef={viewmodel.refDescribe}
                value={viewmodel.describe}
                setvalue={viewmodel.setDescribe}
                textError={viewmodel.errorDescribe}
            />

            <TextareaAutosize
                aria-label="minimum height"
                minRows={5}
                maxRows={10}
                placeholder="Minimum 3 rows"
                style={{ width: '100%' }}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
                <PrimaryButton
                    onClick={handleCreateCoupon}
                    label="Tạo mã giảm giá"
                />
                <PrimaryButton
                    onClick={handleReset}
                    label="Xóa"
                />
            </Box>
        </Box>
    );
};

export default CreateCoupon;
