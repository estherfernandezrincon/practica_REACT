import classNames from "classnames";
import { useContext } from "react";

import AuthContext from "../../components/main/context";

function Header({ className }) {
  const { isLogged, handleLogout } = useContext(AuthContext);
  return (
    <header className={classNames("header", className)}>
      <div className="header-logo"></div>
      <nav className="header-nav">
        {isLogged ? (
          <button className="header-button" onClick={handleLogout}>
            Log Out
          </button>
        ) : (
          <button className="header-button">Log In</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
