import {BrowserRouter, Route, Routes} from "react-router-dom";
import {LoginPage, HomePage} from "./routes/ShopRoute.ts";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
