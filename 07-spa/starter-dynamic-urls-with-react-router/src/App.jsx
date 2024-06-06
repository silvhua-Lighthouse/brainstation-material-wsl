import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import Header from "./components/Header";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

function App() {
  const username = "Last Minute Shopper";

  return (
  <>
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage username={username}/>} />
      <Route path="contact" element={<ContactsPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/products/:productId" element={<ProductDetailsPage/>} />
    </Routes>
  </BrowserRouter>
  </>
  )
}

export default App;
