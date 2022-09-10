import logo from "./assets/Fill 213.svg";
import { NavBarStyled } from "./styles/NavBar.styled";

export default function NavBar() {
  return (
    <NavBarStyled>
      <nav>
        <img src={logo} alt="" />
        <h1>my travel journal.</h1>
      </nav>
    </NavBarStyled>
  );
}
