import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Image from '../components/image';
import SEO from '../components/seo';

const HomePage = () => (
    <Layout>
      <SEO title="Home" />
      <div className="block mx-auto w-4/5 text-center p-2">
        <h1 className="text-purple-900 text-6xl font-bold">HackCarleton</h1>
        <h2 className="mt-6 text-purple-900">A group of dedicated developers creating a better Carleton U.</h2>
        <h3 className="text-purple-900">More Coming Soon</h3>
      </div>
    </Layout>
  );
  
  export default HomePage;
  