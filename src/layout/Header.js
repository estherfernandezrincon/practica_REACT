import classNames from "classnames";

function Header({ className, isLogged }) {
  return (
    <header className={classNames("header", className)}>
      <div className="header-logo"></div>
      <nav className="header-nav">
        {isLogged ? (
          <button className="header-button">Log Out</button>
        ) : (
          <button className="header-button">Log In</button>
        )}
      </nav>
    </header>
  );
}

export default Header;
