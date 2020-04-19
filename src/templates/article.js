import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import "prismjs/themes/prism-tomorrow.css";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <h1>{post.frontmatter.title}</h1>
      <p>投稿日: {post.frontmatter.date}</p>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <p>
        <Link to="/blog">記事一覧にもどる</Link>
      </p>
      <p>
        <Link to="/">ホームにもどる</Link>
      </p>
    </Layout>
  );
};

export const query = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        title
        date
        path
      }
      html
    }
  }
`;
