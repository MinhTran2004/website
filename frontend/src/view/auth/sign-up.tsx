import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import PrimatyButton from "./PrimaryButton";
import ItemInputText from "./ItemInputText";

const SignUP = () => {
    const navigate = useNavigate();

    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [errorPhone, setErrorPhone] = useState('');
    const [errorPassword, setErrorPassword] = useState('');
    const focusPhone = useRef<HTMLInputElement>(null);
    const focusPassword = useRef<HTMLInputElement>(null);

    const checkData = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (phone === '') {
            setErrorPhone('Email không được để trống');
            focusPhone.current?.focus();
            return false;
        } else if (!emailRegex.test(phone)) {
            setErrorPhone('Email không hợp lệ');
            focusPhone.current?.focus();
            return false;
        } else {
            setErrorPhone('');
        }

        if (password === '') {
            setErrorPassword('Mật khẩu không được để trống');
            return false;
        } else if (password.length < 6 || password.length > 10) {
            setErrorPassword('Mật khẩu có độ dài từ 6 - 10 ký tự');
            return false;
        } else {
            setErrorPassword('');
        }
        return true;
    }

    const register = () => {
        if (checkData()) {
            navigate('/main');
        }
    }

    return (
        <Box sx={{
            flex: 1,
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyItems: 'center',
            backgroundColor: '#05070a',
        }}>
            
            <Box sx={{ width: '100%', textAlign: 'center' , position: 'absolute', paddingTop: 3 }}>
                <img src={require('../../assets/images/image.png')} style={{ width: 100, height: 100 }} alt='' />
            </Box>

            <Box
                sx={{
                    backgroundColor: '#0c1017',
                    display: 'flex',
                    margin: 'auto',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '30px',
                    borderRadius: '20px',
                    gap: '30px',
                    boxSizing: 'border-box',
                    '@media (max-width: 600px)': {
                        gap: '15px',
                        padding: '20px',
                    },
                    width: {
                        xs: 'auto',
                        sm: '490px',
                        md: '500px',
                        lg: '500px',
                        xl: '500px',
                    },
                }}>

                <Typography sx={{ fontWeight: 600, fontSize: 28, color: 'white', fontFamily: 'Inter' }}>Đăng nhập</Typography>

                <Box sx={{
                    backgroundColor: '#0c1017',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                }}>
                    <Box sx={{
                        backgroundColor: '#0c1017',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                    }}>
                        <ItemInputText
                            title="Tài khoản"
                            value={phone}
                            setValue={setPhone}
                            inputRef={focusPhone}
                            placeholder="Nhập tài khoản"
                            textError={errorPhone} />
                        <ItemInputText
                            title="Mật khẩu"
                            value={password}
                            setValue={setPassword}
                            inputRef={focusPassword}
                            placeholder="Nhập mật khẩu"
                            textError={errorPassword} />
                    </Box>
                    {/* <Typography sx={{ fontFamily: 'Inter', color: 'white', fontSize: 14 }}>Với việc đăng ký tài khoản, bạn chấp nhận các
                        <Typography component='span' sx={{ color: '#FFA21A', fontWeight: 600 }}> điều khoản </Typography>
                        và
                        <Typography component='span' sx={{ color: '#FFA21A', fontWeight: 600 }}> chính sách </Typography>
                        của chúng tôi.
                    </Typography> */}
                </Box>

                <PrimatyButton
                    label="Tiếp theo"
                    onPress={() => register()} />

                {/* <Typography sx={{ fontFamily: 'Inter', color: 'white', fontSize: 14, display: 'flex', gap: '6px', justifyContent: 'center' }}>
                        Bạn đã có tài khoản?
                        <a href="#a" style={{ color: '#1A77FF', fontWeight: 600, textDecoration: 'none' }}>Đăng nhập</a>
                    </Typography> */}
            </Box>

            <Box style={{ backgroundColor: 'black', width: '100%', position: 'absolute', bottom: 0, paddingTop: 4, paddingBottom: 4, boxSizing: 'border-box' }}>
                <p style={{
                    textAlign: 'center',
                    fontSize: 16,
                    fontWeight: 600,
                    color: '#4C4A48'
                }}>© 2024 comacPro. Ltd. All Rights Reserved</p>
            </Box>
        </Box>
    )
}



export default SignUP;