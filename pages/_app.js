import Layout from '../components/Layout'
import React, { useState, useEffect, useLayoutEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}


