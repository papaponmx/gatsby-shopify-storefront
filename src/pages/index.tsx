import 'twin.macro'

import { PageProps, graphql, useStaticQuery } from 'gatsby';
import React, { FC } from 'react';

import LandingPageBottomHero from '../components/LandingPageBottomHero';
import LandingPageHero from '../components/LandingPageHero';
import Layout from '../components/Layout';
import MiddleBanner from '../components/MiddleBanner';
import SEO from '../components/SEO';

const IndexPage: FC<PageProps> = (props) => {
  const { location } = props;
  return (
    <Layout location={location}>
      <SEO title="Home" />
        <LandingPageHero />
        <MiddleBanner />
        <LandingPageBottomHero />
    </Layout>
  );
};

export default IndexPage;
