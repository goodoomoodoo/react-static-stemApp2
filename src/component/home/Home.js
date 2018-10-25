import React from 'react';

import '../../style/Home.css';

// Mount
import Billboard from './Billboard';
import Navbar from './Navbar';
import Poster from './Poster';
import Quote from './Quote';
import Footer from '../Footer';

class Home extends React.Component
{
    render()
    {
        return (
            <div>
                <Navbar />
                <Billboard />
                <Poster />
                <Quote />
                <Footer />
            </div>
        );
    }
}

export default Home;