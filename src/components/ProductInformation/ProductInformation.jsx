import { useState } from "react"
import "./ProductInformation.css"

const sizes = [39, 40, 41, 42, 43]
const colors = [
  { name: "Azul-claro", value: "#73E7F2" },
  { name: "Coral", value: "#F26B78" },
  { name: "Preto", value: "#535353" },
  { name: "Azul", value: "#655FC6" },
]

function ProductInformation({ product }) {
  const [selectedSize, setSelectedSize] = useState(41)
  const [selectedColor, setSelectedColor] = useState(colors[1].name)

  return (
    <div className="productDetailsInfo">
      <h1 id="productDetailsTitle">{product.title}</h1>
      <p className="productDetailsMeta">
        {product.catalogCategory} | {product.brand} | REF: {product.id}
      </p>

      <div className="productDetailsRating" aria-label="Avaliação 4,7 de 5">
        <span className="productDetailsStars" aria-hidden="true">★★★★★</span>
        <strong>4.7</strong>
        <span>(20 avaliações)</span>
      </div>

      <div className="productDetailsPrice">
        <span>R$</span>
        <strong>{product.price.replace(/^R\$\s*/, "")}</strong>
        {product.discount && <del>{product.oldPrice}</del>}
      </div>

      <div className="productDetailsDescription">
        <h2>Descrição do produto</h2>
        <p>
          O {product.title} combina conforto e estilo para acompanhar sua rotina.
          Confira as opções disponíveis e escolha o tamanho ideal.
        </p>
      </div>

      <fieldset className="productDetailsOptionGroup">
        <legend>Tamanho</legend>
        <div className="productDetailsSizes">
          {sizes.map((size) => (
            <button
              className={selectedSize === size ? "isSelected" : ""}
              key={size}
              type="button"
              aria-pressed={selectedSize === size}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="productDetailsOptionGroup productDetailsColorGroup">
        <legend>Cor</legend>
        <div className="productDetailsColors">
          {colors.map((color) => (
            <button
              className={selectedColor === color.name ? "isSelected" : ""}
              key={color.name}
              type="button"
              aria-label={color.name}
              aria-pressed={selectedColor === color.name}
              style={{ "--swatch-color": color.value }}
              onClick={() => setSelectedColor(color.name)}
            />
          ))}
        </div>
      </fieldset>

      <button className="productDetailsBuyButton" type="button">
        Comprar
      </button>
    </div>
  )
}

export default ProductInformation
