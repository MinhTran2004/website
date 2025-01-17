import { Box, TextareaAutosize, TextField, Typography } from "@mui/material";
import ViewModelCreateCoupon from "../../viewmodel/create-coupon.viewmodel";
import ItemInputText from "../../component/ItemInputText";
import PrimaryButton from "../../component/PrimaryButton";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import StatusModal from "../../component/dialog/StatusModal";

const CreateCoupon = () => {
    const viewmodel = ViewModelCreateCoupon();
    const today = new Date(); 
    today.setHours(0, 0, 0, 0);

    return (
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography sx={{ textAlign: 'center', fontSize: 25, fontWeight: 600 }}>Tạo mã giảm giá</Typography>

            <ItemInputText
                label="Tên mã giảm giá"
                inputRef={viewmodel.refName}
                value={viewmodel.name}
                setvalue={viewmodel.setName}
                textError={viewmodel.errorName}
            />

            <Box sx={{ display: 'flex', gap: 1 }}>
                <ItemInputText
                    label="Giảm giá"
                    inputRef={viewmodel.refDiscount}
                    value={viewmodel.discount}
                    setvalue={viewmodel.setDiscount}
                    textError={viewmodel.errorDiscount}
                    type="number"
                />
                <ItemInputText
                    label="Số lượng"
                    inputRef={viewmodel.refQuantity}
                    value={viewmodel.quantity}
                    setvalue={viewmodel.setQuantity}
                    textError={viewmodel.errorQuantity}
                    type="number"
                />
            </Box>

            <ItemInputText
                label="Điều kiện đơn hàng"
                inputRef={viewmodel.refCondition}
                value={viewmodel.condition}
                setvalue={viewmodel.setCondition}
                textError={viewmodel.errorCondition}
                type="number"
            />

            <Box sx={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: 1 }}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <DatePicker
                            label="Chọn ngày"
                            value={viewmodel.datePickStart}
                            onChange={viewmodel.handleDateStart}
                            minDate={today}
                        />
                        {viewmodel.errorStartdate && <Typography sx={{ color: 'red', fontSize: 12 }}>{viewmodel.errorStartdate}</Typography>}
                    </Box>
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <DatePicker
                            label="Chọn ngày"
                            value={viewmodel.datePickEnd}
                            onChange={viewmodel.handleDateEnd}
                            minDate={today}
                        />
                        {viewmodel.errorEnddate && <Typography sx={{ color: 'red', fontSize: 12 }}>{viewmodel.errorEnddate}</Typography>}
                    </Box>
                </LocalizationProvider>
            </Box>

            <Box>
                <TextareaAutosize
                    value={viewmodel.describe}
                    onChange={(text) => viewmodel.setDescribe(text.target.value)}
                    aria-label="minimum height"
                    minRows={5}
                    maxRows={10}
                    placeholder="Mô tả mã"
                    style={{ width: '100%' }} />
                {viewmodel.errorDescribe && <Typography sx={{ color: 'red', fontSize: 12 }}>{viewmodel.errorDescribe}</Typography>}
            </Box>

            <Box sx={{ display: 'flex', gap: 2 }}>
                <PrimaryButton
                    onClick={() => {
                        viewmodel.createCoupon()
                    }}
                    label="Tạo mã giảm giá"
                />
                <PrimaryButton
                    onClick={() => { viewmodel.setInputNull() }}
                    label="Xóa"
                />
            </Box>

            <StatusModal
                isModel={viewmodel.dialogSuccess}
                title="Thông báo"
                label="Tạo mã giảm giá thành công"
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
                label="Tạo mã giảm giá thất bại"
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

export default CreateCoupon;