import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import ProductList from './components/ProductList';
import Paiement from './components/Paiement';
import Confirmation from './components/Confirmation';

function App() {
  return (
    <Router>
      <h1 align="center">Application mcommerce</h1>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/payer-commande" element={<Paiement />} />
        <Route path="/payer-commande/:idCommande/:price" element={<Paiement />} />
        <Route path="/confirmation/:paiementOk" element={<Confirmation />} />
      </Routes>
      
    </Router>
    
  );
}

export default App;
