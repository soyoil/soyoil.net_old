import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

const Header = () => (
  <header className="navigation">
    <div class="container navlinks">
      <p className="navitems">
        <Link to="/">home</Link>
      </p>
      <p className="navitems">
        <Link to="/">works</Link>
      </p>
      <p className="navitems">
        <Link to="/blog">blog</Link>
      </p>
      <p className="navitems">
        <Link to="/about">about</Link>
      </p>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
