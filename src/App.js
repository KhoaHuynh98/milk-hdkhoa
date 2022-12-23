import "./App.css";
import BoxMilk from "./component/BoxMilk";
import { products } from "./data/milk";

function App() {
  return (
    <div className="App">
      {products.map((products) => (
        <BoxMilk
          title={products.name}
          img={products.image}
          content={products.desc}
          price={products.price}
        ></BoxMilk>
      ))}
    </div>
  );
}

export default App;
App();
