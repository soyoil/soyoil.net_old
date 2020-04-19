import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Home</h1>
    <p>ようこそ。 Welcome.</p>
    <ul>
      <li>
        <Link to="/works">My works</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/about">About me</Link>
      </li>
    </ul>
  </Layout>
);
