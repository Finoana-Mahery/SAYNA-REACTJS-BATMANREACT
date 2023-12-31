import "./NavBar.scss";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import logo from "../../assets/logos/logohome.png";
import { useState, useEffect } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useWindowsWidth } from "../../Context";

export default function NavBar({ number }) {
  const [showMenu, setShowMenu] = useState(false);
  // Fonction pour mettre à jour la largeur de l'écran
  const [menuOpen, setMenuOpen] = useState(false);
  const windowWidth = useWindowsWidth();

  useEffect(() => {
    // Affiche le bouton de menu lorsque la largeur est inférieure à 1000px
    if (windowWidth < 1000) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
      setMenuOpen(false);
    }
  }, [windowWidth]);

  //Huberger-menu logique

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="NavBar" style={{ padding: showMenu && "0 5%" }}>
      <img src={logo} alt="" />
      {showMenu ? (
        <div className="menuBurger">
          <button className="hamburger-button" onClick={toggleMenu}>
            {menuOpen == false ? (
              <HiOutlineMenu
                style={{ width: "35px", height: "auto", cursor: "pointer" }}
              />
            ) : (
              <IoMdClose
                style={{ width: "35px", height: "auto", cursor: "pointer" }}
              />
            )}
          </button>
          {menuOpen && (
            <div className="menu">
              <ul>
                <li
                  style={{
                    borderBottom: number == 1 && "2px solid white",
                    fontWeight: number == 1 && "bold",
                    backgroundColor:
                      number == 1 && "rgba(255, 255, 255, 0.105)",
                  }}
                >
                  <Link>HOME</Link>
                </li>
                <li
                  style={{
                    borderBottom: number == 2 && "2px solid white",
                    fontWeight: number == 2 && "bold",
                    backgroundColor:
                      number == 2 && "rgba(255, 255, 255, 0.105)",
                  }}
                >
                  <Link>GAME</Link>
                </li>
                <li
                  style={{
                    border: number == 3 && "1px solid white",
                    backgroundColor:
                      number == 3 && "rgba(255, 255, 255, 0.305)",
                    fontWeight: number == 3 && "bold",
                  }}
                >
                  <Link className="test" to="/">
                    E-SHOP
                  </Link>
                </li>
                <li
                  style={{
                    borderBottom: number == 4 && "2px solid white",
                    fontWeight: number == 4 && "bold",
                    backgroundColor:
                      number == 4 && "rgba(255, 255, 255, 0.105)",
                  }}
                >
                  <Link to="/monCompte">MON COMPTE</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <ul className="liste">
          <li
            style={{
              borderBottom: number == 1 && "2px solid white",
              fontWeight: number == 1 && "bold",
            }}
          >
            <Link>HOME</Link>
          </li>
          <li
            style={{
              borderBottom: number == 2 && "2px solid white",
              fontWeight: number == 2 && "bold",
            }}
          >
            <Link>GAME</Link>
          </li>
          <li
            style={{
              borderBottom: number == 3 && "2px solid white",

              fontWeight: number == 3 && "bold",
            }}
          >
            <Link className="test" to="/">
              E-SHOP
            </Link>
          </li>
          <li
            style={{
              borderBottom: number == 4 && "2px solid white",
              fontWeight: number == 4 && "bold",
            }}
          >
            <Link to="/monCompte">MON COMPTE</Link>
          </li>
        </ul>
      )}
    </div>
  );
}
NavBar.propTypes = {
  number: PropTypes.number,
  windowWidth: PropTypes.number,
};
