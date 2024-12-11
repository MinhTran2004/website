import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUP from "./view/auth/sign-up";
import Main from "./view/Main.view";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/main" element={<SignUP />} />
      </Routes>
    </BrowserRouter>
  )
}