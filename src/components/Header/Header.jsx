import { useState } from "react"
import { NavLink } from "react-router-dom"
import Logo from "../../../assets/logo-header.svg"
import { Menu, Search, ShoppingCart } from "lucide-react"
import "./Header.css"

function Header() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div id="header">
        <button
          type="button"
          id="btnMenu"
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu />
        </button>

        <img src={Logo} alt="Logo da PÃ¡gina" id="logo" />

        <form
          action=""
          id="form"
          className={searchOpen ? "search-open" : ""}
          onSubmit={(event) => event.preventDefault()}
        >
          <input type="text" id="search" placeholder="Pesquisar produtos" />
          <button type="button" id="btnSearch">
            <Search color="#999999" aria-label="Pesquisar produtos" />
          </button>
        </form>

        <div id="userActions">
          <button
            type="button"
            id="btnSearchMobile"
            aria-label="Abrir pesquisa"
            aria-expanded={searchOpen}
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <Search />
          </button>
          <button type="button" id="btnRegister" aria-label="Cadastrar-se">
            Cadastre-se
          </button>
          <button type="button" id="btnLogin" aria-label="Entrar">
            Entrar
          </button>
          <button type="button" id="btnCart" aria-label="Carrinho de Compras">
            <ShoppingCart color="#c92071" />
            <span id="cartCount">2</span>
          </button>
        </div>
      </div>

      <nav className={menuOpen ? "nav-open" : ""}>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/produtos">Produtos</NavLink></li>
          <li><a href="/">Categorias</a></li>
          <li><a href="/">Meus Pedidos</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
