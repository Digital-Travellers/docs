import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { Content } from '@site/src/components';
import Layout from '@theme/Layout';

import React from 'react';

export const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={`Home - ${siteConfig.title}`} description="">
      <main className="px-8 py-8">
        <Content />
      </main>
    </Layout>
  );
};

export default Home;
