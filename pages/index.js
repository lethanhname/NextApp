import withLayout from '../components/layout/withLayout';  
// --- Post bootstrap -----
/* eslint-disable @next/next/no-img-element */
import NextLink from 'next/link';
import { Grid, Link, Typography } from '@material-ui/core';
import db from '../utils/db';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';

import React from 'react';
import AppAppBar from '../components/layout/AppAppBar';
import AppFooter from '../components/layout/AppFooter';

import ProductHero from '../components/home/ProductHero';
import ProductValues from '../components/home/ProductValues';
import ProductHowItWorks from '../components/home/ProductHowItWorks';
import ProductCTA from '../components/home/ProductCTA';
import ProductSmokingHero from '../components/home/ProductSmokingHero';


function Index() {
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
export default withLayout(Index);
