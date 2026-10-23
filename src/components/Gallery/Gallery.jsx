import './Gallery.css'

function Gallery() {
  return (
    <section id="gallery">
        <div id="galleryContent">
            <span id="gallerySubtitle">
                Melhores ofertas personalizadas
            </span>

            <h1>
                Queima de estoque Nike
            </h1>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam repellat itaque, nostrum tempora incidunt dolore totam, suscipit error nisi iure consequuntur perspiciatis explicabo facere facilis, eaque culpa! Quisquam, nobis repellendus?
            </p>

            <button type="button" id="galleryButton">
                Ver ofertas
            </button>
        </div>
        
        <div id="galleryImage">
            <img src="../../../public/product-image-6.png" alt="Tênis Nike em destaque na promoção" srcset="" />
        </div>

        <div id="galleryIndicators">
            <button 
                type="button"
                className="galleryIndicator active"
                aria-label="Mostrar slide 1"
                aria-current="true"
            >

            </button>
            <button
                type="button"
                className="galleryIndicator"
                aria-label="Mostrar slide 2"
            >

            </button>

            <button
                type="button"
                className="galleryIndicator"
                aria-label="Mostrar slide 3"
            >

            </button>

            <button
                type="button"
                className="galleryIndicator"
                aria-label="Mostrar slide 4"
            >

            </button>
        </div>
    </section>
  )
}

export default Gallery