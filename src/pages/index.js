import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <p>This is a soyoil's homepage.</p>
    <ul>
      <li><Link to="/works">My works</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/about">About me</Link></li>
    </ul>
  </Layout>
);

export default IndexPage;
