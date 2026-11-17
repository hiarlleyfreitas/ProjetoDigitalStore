import { Link } from "react-router-dom"
import "./RelatedProducts.css"

function RelatedProducts({ products }) {
  return (
    <section className="productRelated" aria-labelledby="productRelatedTitle">
      <div className="productRelatedHeader">
        <h2 id="productRelatedTitle">Produtos Relacionados</h2>
        <Link to="/produtos">Ver todos <span aria-hidden="true">→</span></Link>
      </div>
      <div className="productRelatedGrid">
        {products.map((product) => (
          <Link
            className="productRelatedCard"
            key={product.id}
            to={`/produtos/${product.id}`}
            aria-label={`Ver detalhes de ${product.title}`}
          >
            <div className="productRelatedImage">
              {product.discount && <span>{product.discount}</span>}
              <img src={product.image} alt={product.title} />
            </div>
            <p>{product.category}</p>
            <h3>{product.title}</h3>
            <div className="productRelatedPrices">
              <del>{product.oldPrice}</del>
              <strong>{product.price}</strong>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
