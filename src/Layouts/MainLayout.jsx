import Header from "../components/Header/Header"

function MainLayout({children}) {
  return (
    <>
        <Header />
        {children}
        <footer>Rodapé</footer>
    </>
  )
}

export default MainLayout