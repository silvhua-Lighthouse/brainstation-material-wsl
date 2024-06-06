import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./components/Header";

function App() {
  return (
  <>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="contact" element={<ContactsPage />} />
      <Route path="products" element={<ProductsPage />} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
