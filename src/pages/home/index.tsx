import { Content } from '@site/src/components';
import Layout from '@theme/Layout';

import React from 'react';

export const Home = (): JSX.Element => (
  <Layout title="Home" description="">
    <main className="px-8 py-8">
      <Content />
    </main>
  </Layout>
);

export default Home;
