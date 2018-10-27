import React from 'react';

import rocket from '../../rocket.png';

import '../../style/Billboard.css';

class Billboard extends React.Component
{
    render()
    {
        return (
            <div className='billboard'>
                <div className='rocketLauncher'>
                    <img className='rocket' src={rocket} />
                </div>
                <h1>Better Than Merely.</h1>
            </div>
        );
    }
}

export default Billboard;