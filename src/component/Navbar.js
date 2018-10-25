import React from 'react';

import '../style/Navbar.css';

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
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            More
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;