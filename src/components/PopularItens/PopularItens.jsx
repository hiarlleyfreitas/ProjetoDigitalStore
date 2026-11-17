import popularItems from "../../data/popularItems"
import { Link } from "react-router-dom"
import "./PopularItens.css"

function PopularItens() {
  return (
    <section id="popularItems" aria-labelledby="popularItemsTitle">
      <div className="popularItemsContainer">
        <div className="popularItemsHeader">
          <h2 id="popularItemsTitle">Produtos em alta</h2>
          <a href="#popularItemsGrid" className="popularItemsSeeAll">
            Ver todos <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="popularItemsGrid" id="popularItemsGrid">
          {popularItems.map((item) => (
            <article className="popularItem" key={item.id}>
              <Link className="popularItemLink" to={`/produtos/${item.id}`}>
                <div className="popularItemImage">
                  {item.discount && (
                    <span className="popularItemDiscount">{item.discount}</span>
                  )}
                  <img src={item.image} alt={item.title} />
                </div>

                <p className="popularItemCategory">{item.category}</p>
                <h3 className="popularItemTitle">{item.title}</h3>
                <p className="popularItemPrices">
                  <del>{item.oldPrice}</del>
                  <strong>{item.price}</strong>
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularItens
