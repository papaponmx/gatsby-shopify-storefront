import { Link, PageProps, graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

// import Grid from '../components/Grid';
// import Img from 'gatsby-image'
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import 'twin.macro'


const query = graphql`
  query {
  image: file(relativePath: { eq: "cuarzo.jpg" }) {
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
      <div tw="grid grid-cols-1">
        <section tw="font-sans font-thin max-w-full lg:min-h-screen text-center text-gray-800 grid grid-cols-2">
          <div tw="flex flex-col justify-center items-center lg:h-screen w-full max-w-full max-h-full lg:col-span-1 col-span-2">
            <h1 tw="lg:text-8xl text-6xl max-w-lg lg:mb-14">
              Describe your product or service
            </h1>

            <button tw="bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 lg:visible invisible">
              Buy now
            </button>
          </div>
          <div tw="lg:col-span-1 col-span-2 lg:h-screen h-56 w-screen max-w-full bg-pink-100"></div>
          <div tw="flex flex-col justify-center items-center w-screen col-span-2 lg:invisible visible py-10">
            <button tw="bg-green-300 bg-opacity-30 text-gray-700 rounded-md w-52 py-4 ">
              Buy now
            </button>
          </div>
        </section>
        </div>

      {/* <Grid>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Img key={1} fluid={data.image.childImageSharp.fluid} />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Grid> */}
    </Layout>
  );
};

export default IndexPage;
