import React from 'react';
import ReactMarkDown from 'react-markdown';

import { Route } from 'react-static';

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
        let nameArr = [ 'about', 'events', 'contact' ];

        return (
            <div className='content'>
                <div className='text'>
                    {
                        this.state.content.map( ( text, index ) => {
                            return (<Route path={`/info/${nameArr[ index ]}`} key={index} 
                                render={() => <ReactMarkDown source={text} />}/>)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Content;