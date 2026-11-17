import "./ProductFilters.css"

function ProductFilters({ groups, selectedFilters, onToggle, isOpen }) {
  return (
    <aside
      className={`productsFilters${isOpen ? " isOpen" : ""}`}
      id="productsFilters"
      aria-label="Filtros de produtos"
    >
      <h1>Filtrar por</h1>

      {groups.map((group) => (
        <fieldset className="productsFilterGroup" key={group.key}>
          <legend>{group.title}</legend>
          <div className="productsFilterOptions">
            {group.options.map((option) => (
              <label className="productsFilterOption" key={option}>
                <input
                  type="checkbox"
                  checked={selectedFilters[group.key].includes(option)}
                  onChange={() => onToggle(group.key, option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
      ))}
    </aside>
  )
}

export default ProductFilters
