import "./Header.css"
import Logo from "../../../assets/logo-header.svg"
import {Search, ShoppingCart} from "lucide-react"


function Header() {
  return (
    <header>
        <div id="header">
            <img src= {Logo} alt="Logo da Página" id="logo" />
            
            <form action="" id="form" >
                <input type="text" id="search" placeholder="Pesquisar produtos"/>
                <button type="button" id="btnSearch"><Search color="#999999" /></button>
            </form>
            
            <div id="userActions">
                <button type="button" id="btnRegister">Cadastre-se</button>
                <button type="button" id="btnLogin">Entrar</button>
                <button type="button" id="btnCart"><ShoppingCart color="#c92071" />
                    <span id="cartCount">2</span>
                </button>
            </div>
        </div>
            
        <nav>
            <ul>
                <li>Home</li>
                <li>Produtos</li>
                <li>Categorias</li>
                <li>Meus Pedidos</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header