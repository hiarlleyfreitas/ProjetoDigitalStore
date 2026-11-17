import { useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import ProductDetailsGallery from "../../components/ProductDetailsGallery/ProductDetailsGallery"
import ProductInformation from "../../components/ProductInformation/ProductInformation"
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts"
import popularItems from "../../data/popularItems"
import products from "../../data/products"
import "./ProductDetailsPage.css"

function ProductDetailsPage() {
  const { productId } = useParams()
  const product = products.find((item) => item.id === Number(productId))
  const relatedProducts = popularItems
    .filter((item) => item.id !== Number(productId))
    .slice(0, 4)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [productId])

  if (!product) {
    return (
      <main className="productDetailsPage">
        <div className="productDetailsContainer productDetailsNotFound">
          <h1>Produto não encontrado</h1>
          <p>Não encontramos um produto com esse endereço.</p>
          <Link to="/produtos">Voltar para produtos</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="productDetailsPage">
      <div className="productDetailsContainer">
        <section className="productDetailsContent" aria-labelledby="productDetailsTitle">
          <ProductDetailsGallery product={product} key={product.id} />
          <ProductInformation product={product} key={product.id} />
        </section>

        <RelatedProducts products={relatedProducts} />
      </div>
    </main>
  )
}

export default ProductDetailsPage
