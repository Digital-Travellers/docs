import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import React from 'react';

export const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Home - ${siteConfig.title}`} description="">
      <main />
    </Layout>
  );
};

export default Home;
