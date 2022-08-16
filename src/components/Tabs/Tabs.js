import React, { Component } from 'react'
import styled, {css, createGlobalStyle} from 'styled-components';

const GlobalBackgroundColor = createGlobalStyle`
    body {
        background-color: #fefefe;
        font-family: 'sans-serif';
        box-sizing: border-box;
    }
`;

const TabEmpty = styled.div`
    color: gray;
    display: inline-block;
    padding: 10px;
`
const Tab = styled.div`
    color: #007bff;
    display: inline-block;
    cursor: pointer;
    ${props => props.tab === true && css`
        border-top: 1px solid #dee2e6;
        border-left: 1px solid #dee2e6;
        border-right: 1px solid #dee2e6;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        border-bottom: none;    
    `}
    padding: 10px;
`
const Text = styled.div`
    color: #212529;
    border-top: ${props => props.line === true && '1px solid #dee2e6'}
`

class Tabs extends Component {
    state = { 
        active: 'Home',
        contents: [
            { title: 'Home', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' },
            { title: 'Profile', text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.' },
            { title: 'Contact', text: '' },
        ]
    } 
    handleClick = item => {
        console.log(item)
        this.setState({ active: item });
    }
    render() { 

        return (
            <div>
                <GlobalBackgroundColor />
                {
                this.state.contents.map(item => {
                    if(item.text === '') { 
                    return (
                        <>
                            <TabEmpty>{item.title}</TabEmpty>
                        </>
                    )
                    } else {                  
                    return (
                        <>
                            <Tab tab={this.state.active === item.title} onClick={() => this.handleClick(item.title)}>{item.title}</Tab>
                        </>
                    )
                    }
                })
                }
                {
                this.state.contents.map(item => {
                    return(
                        <>
                            <Text line={this.state.active === item.title}>{this.state.active === item.title ? item.text : null}</Text>
                        </>
                    )
                })
                }
            </div>
        );
    }
}
 
export default Tabs;