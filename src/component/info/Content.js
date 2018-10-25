import React from 'react';
import ReactMarkDown from 'react-markdown';

import eventMD from '../../content/Event.md';
import aboutMD from '../../content/About.md';

import '../../style/Content.css';

class Content extends React.Component
{
    constructor( props )
    {
        super( props );

        this.state = {
            content: []
        };
    }

    componentWillMount()
    {
        fetch( aboutMD )
          .then( res => res.text() )
          .then( text => {
              let arr = [ text ];
              this.setState({
                  content: arr
              });
          });
        
        fetch( eventMD )
          .then( res => res.text() )
          .then( text => {
              let arr = [ ...this.state.content, text ];
              this.setState({
                content: arr
              });
          });
    }

    render()
    {
        return (
            <div className='content'>
                <div className='text'>
                    {
                        this.state.content.map( ( text, index ) => {
                            return (<div key={index} id={index}><ReactMarkDown source={text} /></div>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Content;