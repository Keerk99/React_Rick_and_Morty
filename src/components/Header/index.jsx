import logo from "../../assets/img/Rick_and_Morty_logo.png";
import "./style.css";

export default function Header() {
  return (
    <header>
      <nav className="navBar">
        <a href="/">
          <img className="logo" src={logo} alt="Logo Rick and Morty" />
        </a>
      </nav>
    </header>
  );
}
