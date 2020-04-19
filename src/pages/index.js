import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import kai from "../images/kai.png";

export default () => (
  <Layout>
    <SEO title="HOME" />
    <h1>HOME</h1>
    <p>ようこそ。</p>
    <Link to="/blog">
      <button className="button button-outline toblog">ブログはこちら</button>
    </Link>
    <h3>Works</h3>
    <p>特にありません。</p>
    <h3>About me</h3>
    <h4>soyoil</h4>
    <img src={kai} className="kai" alt="kai" />
    <p>
      <a href="https://www.tsukuba.ac.jp/">筑波大学</a>の
      <a href="https://www.coins.tsukuba.ac.jp/">情報科学類</a>
      に所属しています。
    </p>
    <p>
      A student of{" "}
      <a href="https://www.coins.tsukuba.ac.jp/">
        College of Information Science
      </a>
      , <a href="https://www.tsukuba.ac.jp/">University of Tsukuba</a>.
    </p>
    <ul>
      <li>
        Twitter: <a href="https://twitter.com/0ilpanic">@0ilpanic</a>
      </li>
      <li>
        GitHub: <a href="https://github.com/soyoil">soyoil</a>
      </li>
    </ul>
  </Layout>
);
