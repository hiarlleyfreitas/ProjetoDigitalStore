import { Funnel } from "lucide-react"
import "./ProductsToolbar.css"

function ProductsToolbar({ sortBy, onSortChange, filtersOpen, onToggleFilters, productCount }) {
  return (
    <div className="productsToolbar">
      <div className="productsToolbarControls">
        <label className="productsSort">
          <span>Ordenar por:</span>
          <select value={sortBy} onChange={(event) => onSortChange(event.target.value)}>
            <option value="relevant">Mais relevantes</option>
            <option value="discount">Em desconto</option>
          </select>
        </label>
        <button
          className="productsFilterToggle"
          type="button"
          aria-label="Filtrar produtos"
          aria-expanded={filtersOpen}
          aria-controls="productsFilters"
          onClick={onToggleFilters}
        >
          <Funnel aria-hidden="true" />
        </button>
      </div>

      <p className="productsResultCount">
        Resultados para <strong>“Tênis”</strong> - {productCount} produtos
      </p>
    </div>
  )
}

export default ProductsToolbar
