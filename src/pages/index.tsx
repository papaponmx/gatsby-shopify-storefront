import { Link, PageProps, graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

import Grid from '../components/Grid';
import Image from '../components/Image';
import Img from 'gatsby-image'
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const query = graphql`
  query {
  image: file(relativePath: { eq: "puppy.jpg" }) {
  childImageSharp {
    fluid(maxWidth: 500, quality: 100) {
      ...GatsbyImageSharpFluid
      ...GatsbyImageSharpFluidLimitPresentationSize
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
        <Img key={1} fluid={data.image.childImageSharp.fluid} />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Grid>
    </Layout>
  );
};

export default IndexPage;
