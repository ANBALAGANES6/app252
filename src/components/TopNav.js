import React,{Component} from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Link} from 'react-router-dom'

import { Header, Navigation} from 'react-mdl';


class TopNav extends Component {
  

    render(){
        return(
            <React.Fragment>          
                <Header id="header" className={"prjct-color"} title={<span><span style={{ color: '#ddd' }}><img style={{width:"180px"}} src="https://cdn-expa.aiesec.org/assets/images/aiesec-logo-white-blue.svg" /> </span></span>}>
                    <Navigation>
                        <Link to="/Edit/6125">Edit</Link>
                    </Navigation>
                </Header>
            </React.Fragment>
                
           
        )
    }
}

export default TopNav