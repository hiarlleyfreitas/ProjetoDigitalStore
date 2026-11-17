import { useMemo, useState } from "react"
import ProductCard from "../../components/ProductCard/ProductCard"
import ProductFilters from "../../components/ProductFilters/ProductFilters"
import ProductsToolbar from "../../components/ProductsToolbar/ProductsToolbar"
import products from "../../data/products"
import "./ProductsPage.css"

const filterGroups = [
  {
    key: "brand",
    title: "Marca",
    options: ["Adidas", "Nike", "Puma", "Balenciaga", "K-Swiss"],
  },
  {
    key: "catalogCategory",
    title: "Categoria",
    options: ["Esporte e lazer", "Casual", "Utilitário", "Corrida"],
  },
  {
    key: "gender",
    title: "Gênero",
    options: ["Masculino", "Feminino", "Unisex"],
  },
  {
    key: "state",
    title: "Estado",
    options: ["Novo", "Usado"],
  },
]

const initialFilters = filterGroups.reduce((filters, group) => {
  filters[group.key] = []
  return filters
}, {})

function ProductsPage() {
  const [selectedFilters, setSelectedFilters] = useState(initialFilters)
  const [sortBy, setSortBy] = useState("relevant")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const visibleProducts = useMemo(() => {
    const filteredProducts = products.filter((product) =>
      filterGroups.every(({ key }) => {
        const selectedOptions = selectedFilters[key]
        return selectedOptions.length === 0 || selectedOptions.includes(product[key])
      }),
    )

    if (sortBy === "discount") {
      return [...filteredProducts].sort(
        (firstProduct, secondProduct) => secondProduct.discountValue - firstProduct.discountValue,
      )
    }

    return filteredProducts
  }, [selectedFilters, sortBy])

  function toggleFilter(groupKey, option) {
    setSelectedFilters((currentFilters) => {
      const selectedOptions = currentFilters[groupKey]
      const nextOptions = selectedOptions.includes(option)
        ? selectedOptions.filter((selectedOption) => selectedOption !== option)
        : [...selectedOptions, option]

      return { ...currentFilters, [groupKey]: nextOptions }
    })
  }

  return (
    <main className="productsPage">
      <div className="productsPageContainer">
        <ProductsToolbar
          sortBy={sortBy}
          onSortChange={setSortBy}
          filtersOpen={filtersOpen}
          onToggleFilters={() => setFiltersOpen((isOpen) => !isOpen)}
          productCount={visibleProducts.length}
        />

        <div className="productsPageLayout">
          <ProductFilters
            groups={filterGroups}
            selectedFilters={selectedFilters}
            onToggle={toggleFilter}
            isOpen={filtersOpen}
          />

          <section className="productsResults" aria-label="Lista de tênis">
            {visibleProducts.length > 0 ? (
              <div className="productsGrid">
                {visibleProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            ) : (
              <p className="productsEmptyState">
                Nenhum produto encontrado com esses filtros.
              </p>
            )}
          </section>
        </div>
      </div>
    </main>
  )
}

export default ProductsPage
