import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUP from "./view/auth/sign-up";
import Main from "./view/Main.view";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUP />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}