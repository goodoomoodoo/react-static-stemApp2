import React from 'react';

import { Link } from 'react-static';

import '../../style/Navbar.css';

class Navbar extends React.Component
{
    render()
    {
        return (
            <div className='navbar'>
                <div className='logo'>
                    CUESTEM
                </div>
                <div className='menu'>
                    <ul>
                        <li>
                            <Link to='info/about'>About</Link>
                        </li>
                        <li>
                            <Link to='info/contact'>Contact</Link>
                        </li>
                        <li>
                            <Link to='info/more'>More</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;