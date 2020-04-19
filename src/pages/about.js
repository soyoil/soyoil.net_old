import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import kai from "../images/kai.png";

export default () => (
  <Layout>
    <SEO title="About me" />
    <h1>About me</h1>
    <img src={kai} className="kai" alt="kai" />
    <h4>soyoil</h4>
    <p>
      <Link to="https://www.tsukuba.ac.jp/">筑波大学</Link>の
      <Link to="https://www.coins.tsukuba.ac.jp/">情報科学類</Link>
      に所属しています。
    </p>
    <p>
      A student of{" "}
      <Link to="https://www.coins.tsukuba.ac.jp/">
        College of Information Science
      </Link>
      , <Link to="https://www.tsukuba.ac.jp/">University of Tsukuba</Link>.
    </p>
    <ul>
      <li>
        Twitter: <Link to="https://twitter.com/0ilpanic">@0ilpanic</Link>
      </li>
      <li>
        GitHub: <Link to="https://github.com/soyoil">soyoil</Link>
      </li>
    </ul>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);
