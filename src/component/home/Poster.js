import React from 'react';

import '../../style/Poster.css';

class Poster extends React.Component
{
    render()
    {
        return (
            <div className='poster'>
                <div className='mark'>
                    <div className='text'>
                        <h3>Our Statement</h3>
                    </div>
                </div>
                <div className='mark'>
                    <div className='text'>
                        <h3>Next Event</h3>
                    </div>
                </div>
                <div className='mark'>
                    <div className='text'>
                        <h3>Find Us</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Poster;