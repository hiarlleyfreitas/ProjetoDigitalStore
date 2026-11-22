import "./SpecialOffer.css"

function SpecialOffer() {
  return (
    <section className="specialOffer" aria-labelledby="specialOfferTitle">
      <div className="specialOfferContainer">
        <div className="specialOfferVisual" aria-hidden="true">
          <img
            className="specialOfferBackground"
            src="/ellipse-11.png"
            alt=""
          />
          <img
            className="specialOfferShoe"
            src="/laye-1.png"
            alt=""
          />
        </div>

        <div className="specialOfferContent">
          <p className="specialOfferEyebrow">Oferta Especial</p>
          <h2 id="specialOfferTitle">Air Jordan edição de colecionador</h2>
          <p className="specialOfferDescription">
            Um clássico que atravessa gerações. Garanta uma edição especial e
            leve mais personalidade para o seu estilo.
          </p>
          <button className="specialOfferButton" type="button">
            Ver Oferta
          </button>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
