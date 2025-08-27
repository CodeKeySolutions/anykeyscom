import React, { Suspense} from 'react';
import { Helmet } from 'react-helmet';

const ProductGrid = React.lazy(() => import('./components/ProductGrid'));
const Hero = React.lazy(() => import('./components/Hero'));
const NavBar = React.lazy(() => import('./components/NavBar'));


function App() {

  return (
     <Suspense fallback={<div>Loading...</div>}>
      <Helmet>
      <title>AnyKeys - Unlock Your Potential</title>
      <meta name="description" content="Premium keys and services at AnyKeys." />
      </Helmet>
      <NavBar />
      <Hero />
      <ProductGrid />
    </Suspense>
  );
}

export default App;