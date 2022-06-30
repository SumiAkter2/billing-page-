import Header from "./Component/Header";
import Layout from "./Component/Layout";
import { Routes, Route, } from "react-router-dom";
import Modal from "./Component/Modal";
import AddBill from "./Component/AddBill";
import BillList from "./Component/BillList";

function App() {
  return (
    <Layout>
      <Header></Header>
      <Modal></Modal>
      <BillList></BillList>
      {/* <AddBill></AddBill> */}
    </Layout>
  );
}

export default App;
