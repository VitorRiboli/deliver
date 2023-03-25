import "./styles.css";
import logoIcon from "../../assets/img/logo.svg";
import { Link, Outlet } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="main-header">
        <nav className="nav-container">
          <Link to={"/"}>
            <div className="nav-logo">
              <img src={logoIcon} alt="" />
              <h2>Deliver</h2>
            </div>
          </Link>
        </nav>
      </header>

      <Outlet />
    </>
  );
}
