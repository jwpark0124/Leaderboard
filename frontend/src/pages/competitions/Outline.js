import Footer from 'components/AppLayoutComponents/Footer';
import Navbar from 'components/AppLayoutComponents/Navbar';
import React from 'react';
import Ground from './OutlineComponents/Ground';

function Outline() {
  return (
    <div>
      <Navbar />
      <Ground />
      <Footer />
    </div>
  );
}

export default Outline;
