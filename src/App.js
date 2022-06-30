import Header from "./Component/Header";
import Layout from "./Component/Layout";
import { Routes, Route, } from "react-router-dom";
import Modal from "./Component/Modal";

function App() {
  return (
    <Layout>
      <Header></Header>
      <Routes >
        <Route path="/" element={<Modal></Modal>}></Route>
      </Routes>

    </Layout>
  );
}

export default App;
