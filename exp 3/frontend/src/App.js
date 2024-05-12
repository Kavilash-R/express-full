import { Routes, Route } from "react-router-dom";
import Home from "./user auth pages/Home";
import Login from "./user auth pages/Login";
import Signup from "./user auth pages/Signup";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
