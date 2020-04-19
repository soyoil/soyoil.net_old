import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default () => (
  <Layout>
    <SEO title="Blog" />
    <h1>Blog</h1>
    <p>今作っています。</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);
