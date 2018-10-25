import React from 'react';

import { Link } from 'react-static';

import '../../style/Sidebar.css';

class Sidebar extends React.Component
{
    render()
    {
        return (
            <div className='sidebar'>
                <div className='title'>
                    <Link to='/'>CUESTEM</Link>
                </div>
                <ul>
                    <li>
                        <a href='#0'>About</a>
                    </li>
                    <li>
                        <a href='#1'>Events</a>
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;