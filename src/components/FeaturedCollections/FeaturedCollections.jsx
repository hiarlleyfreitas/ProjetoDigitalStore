import { useState } from "react"
import { Headphones, Shirt, SportShoe } from "lucide-react"
import collections from "../../data/collections"
import "./FeaturedCollections.css"

const categories = [
  { name: "Camisetas", Icon: Shirt },
  //   { name: "Calças", Icon: '../../../public/pants-icon.png' },
  //   { name: "Bonés", Icon: CapIcon },
  { name: "Headphones", Icon: Headphones },
  { name: "Tênis", Icon: SportShoe },
]

function FeaturedCollections() {
  const [selectedCategory, setSelectedCategory] = useState("Camisetas")

  return (
    <section id="featuredCollections">
      <div className="featuredCollectionsContainer">
        <h2>Coleções em destaque</h2>

        <div id="collectionsList">
          {collections.map((collection) => (
            <div className="collectionCard" key={collection.id}>
              <div className="collectionContent">
                <span className="collectionDiscount">{collection.discount}</span>
                <h3>{collection.title}</h3>
                <button type="button">{collection.buttonText}</button>
              </div>

              <div className="collectionImage">
                <img src={collection.image} alt={collection.title} />
              </div>
            </div>
          ))}
        </div>

        <h2>Coleções em destaque</h2>
        <div className="featuredCategories" aria-label="Selecione uma categoria">
          {categories.map(({ name, Icon }) => (
            <button
              className={`featuredCategory${selectedCategory === name ? " isSelected" : ""}`}
              type="button"
              key={name}
              aria-pressed={selectedCategory === name}
              onClick={() => setSelectedCategory(name)}
            >
              <Icon className="featuredCategoryIcon" />
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollections
