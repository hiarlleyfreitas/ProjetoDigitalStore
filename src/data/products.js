import popularItems from "./popularItems"

const productAttributes = [
  {
    brand: "K-Swiss",
    catalogCategory: "Esporte e lazer",
    gender: "Masculino",
    state: "Novo",
    discount: "30% OFF",
  },
  {
    brand: "Adidas",
    catalogCategory: "Corrida",
    gender: "Feminino",
    state: "Novo",
    discount: "20% OFF",
  },
  {
    brand: "Nike",
    catalogCategory: "Casual",
    gender: "Unisex",
    state: "Usado",
  },
  {
    brand: "Puma",
    catalogCategory: "Utilitário",
    gender: "Feminino",
    state: "Usado",
    discount: "15% OFF",
  },
  {
    brand: "Balenciaga",
    catalogCategory: "Esporte e lazer",
    gender: "Masculino",
    state: "Novo",
  },
  {
    brand: "Nike",
    catalogCategory: "Corrida",
    gender: "Feminino",
    state: "Usado",
    discount: "10% OFF",
  },
  {
    brand: "Adidas",
    catalogCategory: "Casual",
    gender: "Unisex",
    state: "Usado",
  },
  {
    brand: "Puma",
    catalogCategory: "Utilitário",
    gender: "Masculino",
    state: "Novo",
  },
]

const products = popularItems.map((product, index) => {
  const attributes = productAttributes[index]
  const discountValue = attributes.discount
    ? Number.parseInt(attributes.discount, 10)
    : 0

  return {
    ...product,
    ...attributes,
    title: `Tênis ${attributes.brand} - ${attributes.gender}`,
    discountValue,
  }
})

export default products
