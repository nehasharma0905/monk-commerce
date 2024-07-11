import ProductPage from "./ProductPage";
import monk from "./assets/monk.png";

function App() {

  return (
    <div className={'App'}>
      <nav className="nav">
        <img src={monk} alt="monk" />
        <h1 className="nav-title">Monk Upsell & Cross-sell</h1>
      </nav>
      <ProductPage/>
    </div>
  );
}

export default App;
