import React, { Suspense, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const ProductGrid = React.lazy(() => import('./components/ProductGrid'));
const Hero = React.lazy(() => import('./components/Hero'));
const NavBar = React.lazy(() => import('./components/NavBar'));


function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
     <Suspense fallback={<div>Loading...</div>}>
      <Helmet>
      <title>AnyKeys - Unlock Your Potential</title>
      <meta name="description" content="Premium keys and services at AnyKeys." />
      </Helmet>
      <NavBar setTheme={() => {}} />
      <Hero />
      <ProductGrid />
    </Suspense>
  );
}

export default App;