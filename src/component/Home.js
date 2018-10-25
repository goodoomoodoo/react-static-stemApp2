import React from 'react';

import '../style/Home.css';

// Mount
import Billboard from './Billboard';
import Navbar from './Navbar';
import Poster from './Poster';

class Home extends React.Component
{
    render()
    {
        return (
            <div>
                <Navbar />
                <Billboard />
                <Poster />
            </div>
        );
    }
}

export default Home;