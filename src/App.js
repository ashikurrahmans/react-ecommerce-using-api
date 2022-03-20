import { useState } from "react";
import AllProducts from "./Components/AllProducts/AllProducts";
import Footer from "./Components/Footer/Footer";
import Menu from "./Components/Menus/Menu";

function App() {
  const [count, setCount] = useState(0);
  const setCartCount = () => setCount(count + 1);

  return (
    <div className="App">
      <Menu count={count}></Menu>
      <AllProducts cart={setCartCount}></AllProducts>
      <Footer></Footer>
    </div>
  );
}

export default App;
