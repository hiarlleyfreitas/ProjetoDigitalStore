import "./Header.css"

function Header() {
  return (
    <header>
        <img src=".\assets\logo-header.svg" alt="Logo da Página" id="logo" />
        <form action="submit" id="form" >
            <input type="text" id="search" placeholder="Pesquisar produtos"/>
        </form>
        <button>Cadastre-se</button>
        <button>Entrar</button>
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