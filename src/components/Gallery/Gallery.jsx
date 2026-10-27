import './Gallery.css'
import { useState } from 'react'

const slides = [
    {
        subtitle: "Melhores ofertas personalizadas",
        title: "Queima de estoque Nike",
        description: "Conquiste o seu estilo com ofertas especiais.",
        image: "../../../public/produc-image-1.jpeg",
        imageAlt: "Tênis Nike em destaque",
    },
    {
        subtitle: "Ofertas especiais",
        title: "Estilo para todos os momentos",
        description: "Encontre protudos que combinam com você e aproveite as ofertas.",
        image: "../../../public/produc-image-2.jpeg",
    },
    {
        subtitle: "Novidades na loja",
        title: "Descubra seu próximo favorito",
        description: "Explore nossa seleção de produtos e renove seu estilo.",
        image: "../../../public/produc-image-3.jpeg",
        imageAlt: "Novos produtos em destaque",
    },
    {
        subtitle: "Não perca essa oportunidade",
        title: "Ofertas que combinam com você",
        description: "Confira os destaques da Digital Store.",
        image: "../../../public/produc-image-4.jpeg",
        imageAlt: "Produtos em promoção",
    }
]

function Gallery() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const slide = slides[currentSlide]


  return (
    <section id="gallery">
        <div id="galleryContent">
            <span id="gallerySubtitle">
                {slide.subtitle}
            </span>

            <h1>
                {slide.title}
            </h1>

            <p>
                {slide.description}
            </p>

            <button type="button" id="galleryButton">
                Ver ofertas
            </button>
        </div>
        
        <div id="galleryImage">
            <img
                src={slide.image}
                alt={slide.imageAlt}
            />
        </div>

        <div id="galleryIndicators">
            {slides.map((item, index) => (
                <button
                    key={item.title}
                    type='button'
                    className={`galleryIndicator ${
                        index === currentSlide ? 'active' : ''
                    }`}
                    aria-label={`Mostrar slide ${index + 1}`}
                    aria-current={index === currentSlide ? 'true' : undefined}
                    onClick={() => setCurrentSlide(index)}
                />
            ))}
        </div>
    </section>
  )
}

export default Gallery