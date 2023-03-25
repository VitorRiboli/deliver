import "./styles.css";

import ytIcon from "../../assets/img/Youtube.svg";
import LinkeIcon from "../../assets/img/Linkedin.svg";
import instaIcon from "../../assets/img/Instagram.svg";

export default function Footer () {
  return (
    <footer className="footer-container">
      <h3>App desenvolvido durante a 2ª ed. do evento Semana DevSuperior</h3>
      <div className="footer-icons " >
        <img src={ytIcon} alt="" />
        <img src={LinkeIcon} alt="" />
        <img src={instaIcon} alt="" />
      </div>
    </footer>
  )
}