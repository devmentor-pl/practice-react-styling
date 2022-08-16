import React, { Component } from 'react'
import styled, {css} from 'styled-components';

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
    border-top: ${props => props.line === true && '1px solid gray'}
`

class Tabs extends Component {
    state = { 
        active: 'Home',
        contents: [
            { title: 'Home', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur condimentum lacus nec ligula faucibus rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.' },
            { title: 'Profile', text: 'Donec dignissim ultricies felis, eu dictum eros congue in. In gravida lobortis libero nec tempus. Cras rutrum nisl ut leo volutpat rhoncus. Nulla massa nulla, viverra hendrerit laoreet at, tincidunt eu lacus.' },
        ]
    } 
    handleClick = item => {
        console.log(item)
        this.setState({ active: item });
    }
    render() { 

        return (
            <div>
                {
                this.state.contents.map(item => {
                    return(
                        <>
                            <Tab tab={this.state.active === item.title} onClick={() => this.handleClick(item.title)}>{item.title}</Tab>
                            {/* <div>{this.state.active === item.title ? item.text : null}</div> */}
                        </>
                    )
                })
                }
                {
                this.state.contents.map(item => {
                    return(
                        <>
                            {/* <Tab onClick={() => this.handleClick(item.title)}>{item.title}</Tab> */}
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