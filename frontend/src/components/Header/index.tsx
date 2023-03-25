import "./styles.css"
import logoIcon from "../../assets/img/logo.svg";

export default function Header() {
  return (
    <header className="main-header">
      <nav className="nav-container">
        <div className="nav-logo">
          <img src={logoIcon} alt="" />
          <h2>Deliver</h2>
        </div>
        
      </nav>
    </header>
  )
}