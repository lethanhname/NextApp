// --- Post bootstrap -----
/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { Grid, Link, Typography } from '@material-ui/core';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import React from 'react';

import ProductHero from './components/ProductHero';
import ProductValues from './components/ProductValues';
import ProductHowItWorks from './components/ProductHowItWorks';
import ProductCTA from './components/ProductCTA';
import ProductSmokingHero from './components/ProductSmokingHero';


function Home() {
  return (
    <React.Fragment>
      <ProductHero />
      <ProductValues />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
    </React.Fragment>
  );
}
export default Home;
