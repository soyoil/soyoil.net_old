import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

export default ({ data }) => {
  const articleList = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <SEO title="BLOG" />
      <h1>BLOG</h1>
      <Link to="/">ホームにもどる</Link>
      <h3 className="blogsection">最近の投稿一覧</h3>
      {articleList.map(article => (
        <div className="article">
          <h4>
            <Link to={article.node.frontmatter.path}>
              {article.node.frontmatter.title}
            </Link>
          </h4>
          <p>{article.node.frontmatter.date}</p>
        </div>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;
