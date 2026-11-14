import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import "./MainLayout.css"

function MainLayout({ children }) {
  return (
    <div className="sitePage">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default MainLayout
