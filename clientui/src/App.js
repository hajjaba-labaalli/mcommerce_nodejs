import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Paiemant from './components/Paiemant';

function App() {
  return (
    <Router>
      <h1 align="center">Application mcommerce</h1>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/paiemant" element={<Paiemant />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
