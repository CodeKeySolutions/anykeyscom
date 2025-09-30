import React, { Suspense} from 'react';
import { Helmet } from 'react-helmet';

const ProductGrid = React.lazy(() => import('./components/ProductGrid'));
const Hero = React.lazy(() => import('./components/Hero'));
const NavBar = React.lazy(() => import('./components/NavBar'));
const Contact = React.lazy(() => import('./components/Contact'));


function App() {

  return (
     <Suspense fallback={<div>Loading...</div>}>
      <Helmet>
        <title>AnyKeys - Discover</title>
        <meta name="description" content="Discover project, tools and communities by gamers for gamers!" />
        <meta name='keywords'  content='anykeys, text-to-speech, text to speech, text to voice, discord community, text-based webgame, webgames' />
      </Helmet>
      <NavBar />
      <Hero />
      <ProductGrid />
      <Contact />
    </Suspense>
  );
}

export default App;