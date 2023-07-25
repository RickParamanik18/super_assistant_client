import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CreateForm } from "./pages/CreateForm/CreateForm";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={"homepage"} />
                <Route path="/create" element={<CreateForm/>} />
                <Route path="/login" element={"login"} />
                <Route path="/signin" element={"signin"} />
                <Route path="*" element={404} />
            </Routes>
        </>
    );
}

export default App;
