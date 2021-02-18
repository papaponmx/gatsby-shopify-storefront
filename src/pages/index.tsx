import { Link, PageProps, graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

import Grid from '../components/Grid';
import Image from '../components/Image';
import Img from 'gatsby-image'
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const query = graphql`
query {
  file(relativePath: { eq: "gatsby-astronaut.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;

const IndexPage: FC<PageProps> = (props) => {
  const { location } = props;
  const data = useStaticQuery(query);
  return (
    <Layout location={location}>
      <SEO title="Home" />
      <Grid>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img fixed={data.file.childImageSharp.fixed} />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
