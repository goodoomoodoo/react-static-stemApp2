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
                        <Link to='/info/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/info/events'>Events</Link>
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