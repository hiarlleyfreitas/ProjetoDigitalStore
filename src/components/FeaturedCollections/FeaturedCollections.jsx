import collections from "../../data/collections"
import "./FeaturedCollections.css"

function FeaturedCollections() {
  return (
    <section id="featuredCollections">
        <h2>Coleções em destaque</h2>
        
        <div id="collectionsList">
            {collections.map((collection) => (
                <div className="collectionCard" key={collection.id}>
                    <span className="collectionDiscount">{collection.discount}</span>
                    
                    <div className="collectionContent">
                        <h3>{collection.title}</h3>
                        <button type="button">{collection.buttonText}</button>
                    </div>

                    <div className="collectionImage">
                        <img src={collection.image} alt={collection.title} />
                    </div>

                </div>
            ))}
        </div>
    </section>
  )
}

export default FeaturedCollections
