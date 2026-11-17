import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import "./ProductDetailsGallery.css"

function ProductDetailsGallery({ product }) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const imageIndexes = Array.from({ length: 5 }, (_, index) => index)

  function showPreviousImage() {
    setSelectedImageIndex((currentIndex) => (currentIndex - 1 + imageIndexes.length) % imageIndexes.length)
  }

  function showNextImage() {
    setSelectedImageIndex((currentIndex) => (currentIndex + 1) % imageIndexes.length)
  }

  return (
    <div className="productDetailsGallery">
      <div className="productDetailsImage">
        {product.discount && (
          <span className="productDetailsDiscount">{product.discount}</span>
        )}
        <img src={product.image} alt={product.title} />
        <button
          className="productDetailsGalleryArrow isPrevious"
          type="button"
          aria-label="Imagem anterior"
          onClick={showPreviousImage}
        >
          <ChevronLeft aria-hidden="true" />
        </button>
        <button
          className="productDetailsGalleryArrow isNext"
          type="button"
          aria-label="Próxima imagem"
          onClick={showNextImage}
        >
          <ChevronRight aria-hidden="true" />
        </button>
      </div>

      <div className="productDetailsThumbnails" aria-label="Imagens do produto">
        {imageIndexes.map((imageIndex) => (
          <button
            className={`productDetailsThumbnail${selectedImageIndex === imageIndex ? " isSelected" : ""}`}
            key={`${product.id}-gallery-${imageIndex}`}
            type="button"
            aria-label={`Mostrar imagem ${imageIndex + 1}`}
            aria-pressed={selectedImageIndex === imageIndex}
            onClick={() => setSelectedImageIndex(imageIndex)}
          >
            <img src={product.image} alt="" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProductDetailsGallery
