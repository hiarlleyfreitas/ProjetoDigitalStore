import Gallery from "../../components/Gallery/Gallery"
import FeaturedCollections from "../../components/FeaturedCollections/FeaturedCollections"
import PopularItens from "../../components/PopularItens/PopularItens"
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer"

function HomePage() {
  return (
    <main>
      <Gallery />

      <FeaturedCollections />

      <PopularItens />

      <SpecialOffer />
    </main>
  )
}

export default HomePage

