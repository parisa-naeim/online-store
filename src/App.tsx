import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
import Item from "./components/Item";
import "bootstrap/dist/css/bootstrap.css";

interface ItemInterface {
  name: string;
  description: string;
  price: number;
}

function App() {
  function listItem(arr: ItemInterface[]) {
    return arr.map((item) => (
      <Item
        name={item.name}
        description={item.description}
        price={item.price}
      />
    ));
  }

  function getItems() {
    return [
      { name: "aaa", description: "ddd", price: 1 },
      { name: "aaa", description: "ddd", price: 1 },
      { name: "aaa", description: "ddd", price: 1 },
    ];
  }

  return (
    <>
      <Header></Header>
      {listItem(getItems())}

      <Footer></Footer>
    </>
  );
}

export default App;
