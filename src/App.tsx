import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <>
      <Header></Header>
      <Item name="apple" description="red" price={10}></Item>
      <Item name="orange" description="orange" price={20}></Item>
      <Footer></Footer>
    </>
  );
}

export default App;
