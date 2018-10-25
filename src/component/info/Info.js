import React from 'react';

import '../../style/Info.css';

import Content from './Content';
import Sidebar from './Sidebar';
import Footer from '../Footer';

class Info extends React.Component
{
    render()
    {
        return (
            <div>
                <div className='info'>
                    <Sidebar />
                    <Content />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Info;