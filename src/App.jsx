import { BrowserRouter, Route, Routes, useParams } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage"
import MainLayout from "./Layouts/MainLayout"

function ProductDetailsRoute() {
  const { productId } = useParams()

  return <ProductDetailsPage key={productId} />
}

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos" element={<ProductsPage />} />
          <Route path="/produtos/:productId" element={<ProductDetailsRoute />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default App
