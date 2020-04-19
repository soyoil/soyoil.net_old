/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import "normalize.css";
import "milligram";

import "./layout.css";

const Layout = ({ children }) => (
  <div style={{ fontFamily: "sans-serif" }}>
    <Helmet>
      {/* <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
      /> */}
    </Helmet>
    <div class="container">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
