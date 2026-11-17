import { Link } from "react-router-dom"
import "./ProductCard.css"

function ProductCard({ product }) {
  return (
    <article className="productCard">
      <Link className="productCardLink" to={`/produtos/${product.id}`}>
        <div className="productCardImage">
          {product.discount && (
            <span className="productCardDiscount">{product.discount}</span>
          )}
          <img src={product.image} alt={product.title} />
        </div>
        <p className="productCardCategory">
          {product.category} · {product.brand}
        </p>
        <h2>{product.title}</h2>
        <p className="productCardPrices">
          <del>{product.oldPrice}</del>
          <strong>{product.price}</strong>
        </p>
      </Link>
    </article>
  )
}

export default ProductCard
