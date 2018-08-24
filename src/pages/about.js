import React from 'react';
import Layout from '../components/layout';
import {Link, graphql} from 'gatsby';
import styled from 'styled-components';
import {Provider as SiteHeaderProvider} from '../components/site-header';

const About = () => (
  <SiteHeaderProvider value={{isLarge: true}}>
    <Layout>Testing a page</Layout>
  </SiteHeaderProvider>
);

export default About;
