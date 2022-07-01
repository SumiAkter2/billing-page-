import Header from "./Component/Header";
import Layout from "./Component/Layout";
import { Routes, Route, } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Home";
import Register from "./Component/Register";

function App() {
  return (
    <Layout>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {/* <Route path="/billing" element={<BillList />}></Route> */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
