import facebookIcon from "../../../assets/facebook.svg"
import instagramIcon from "../../../assets/instagram.svg"
import twitterIcon from "../../../assets/twitter.svg"
import "./Footer.css"

const informationLinks = [
  "Sobre Drip Store",
  "Segurança",
  "Wishlist",
  "Blog",
  "Trabalhe conosco",
  "Meus Pedidos",
]

const categoryLinks = [
  "Camisetas",
  "Calças",
  "Bonés",
  "Headphones",
  "Tênis",
]

function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerContainer">
        <div className="footerColumns">
          <section className="footerBrand" aria-label="Digital Store">
            <img
              className="footerLogo"
              src="../../../assets/logo-footer.svg"
              alt="Digital Store"
            />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </p>

            <div className="footerSocialLinks" aria-label="Redes sociais">
              <a href="#facebook" aria-label="Facebook">
                <img src={facebookIcon} alt="" />
              </a>
              <a href="#instagram" aria-label="Instagram">
                <img src={instagramIcon} alt="" />
              </a>
              <a href="#twitter" aria-label="Twitter">
                <img src={twitterIcon} alt="" />
              </a>
            </div>
          </section>

          <nav className="footerLinkColumn" aria-label="Informação">
            <h2>Informação</h2>
            <ul>
              {informationLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footerLinkColumn" aria-label="Categorias">
            <h2>Categorias</h2>
            <ul>
              {categoryLinks.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>

          <section className="footerContact">
            <h2>Contato</h2>
            <address>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </address>
            <a href="tel:+558530513411">(85) 3051-3411</a>
          </section>
        </div>

        <div className="footerCopyright">
          <small>© 2022 Digital College</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer
