import { BrouwserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";


function AppRoutes() {
    return (
        <BrouwserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
        </BrouwserRouter>
    )
}

export default AppRoutes
