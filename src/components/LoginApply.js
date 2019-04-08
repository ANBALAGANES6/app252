import React ,{Component} from 'react';
import { Cell,Card,CardText,CardTitle,CardActions,Button ,Grid} from 'react-mdl';
import TabList from './TabList';
import './css/style.css';
import Moment from 'react-moment';
import FaFaceBook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

class LoginApply extends Component{

    render(){
        const {position,sdginfo} = this.props;
      
        return (
            <div style={{width: '100%', margin: '1px'}} >
            <Grid className="demo-grid-ruler" >
            <Cell col={6}>
                    <TabList sdgdetails={sdginfo} />
                     </Cell>
               <Cell col={5} id="myid">
                    <Card shadow={0} style={{width: '90%', margin: 'auto'}} >
                        <CardTitle className={"global-volunter"}></CardTitle>
                        <CardText>
                            <Grid>
                            <Cell col={12} className={"login-card-heading"}>LANGUAGE</Cell>
                            {Object.keys(position).length? 
                            position.languages.map((key)=>{
                                return <Cell col={12} key={key}>{ key.name}</Cell>
                            })
                                
                                
                                :""}
                        </Grid>        
                        <hr />  
                        <Grid>
                        <Cell col={5} className={"login-card-heading"}>EARLIEST START DATE</Cell>                              
                        <Cell col={5} className={"login-card-heading"}>LATEST END DATE</Cell>
                        <Cell col={1} className={"login-card-heading"}>DURATION</Cell>
                        <Cell col={5} className={"login-card-txt"}>
                        <Moment format="D MMM YYYY">
                        {position.latest_end_date}
                        </Moment></Cell>                              
                        <Cell col={5} className={"login-card-txt"}>
                        <Moment format="D MMM YYYY">
                        {position.latest_end_date}
                        </Moment>
                        </Cell>
                        <Cell col={1} className={"login-card-txt"}>{position.duration}Weeks</Cell>
                        </Grid>
                        <hr />
                        <Grid>
                            <Cell col={10} className={"login-card-heading"}>SALARY</Cell>                              
                            <Cell col={1} className={"login-card-heading"}>POSITION</Cell> 
                            <Cell col={10} className={"login-card-txt"}>
                            {Object.keys(position).length? 
                             <p col={12} key={"d"}>{  position.specifics_info.salary}</p>:""
                            }
                            </Cell>                              
                            <Cell col={1} className={"login-card-txt"}>{position.openings}</Cell>                       
                        </Grid>
                        </CardText>
                        <CardActions border className={"card-action-btn"}>
                        <Button raised colored className={"prjct-color"}>Login to Apply</Button>
                        <Grid>
                            <Cell col={4} offset={8}>
                            <FaFaceBook className={"social-icons"} />
                             <FaTwitter className={"social-icons"} />
                             <FaLinkedin className={"social-icons"} />
                             </Cell>
                        </Grid>
                        </CardActions>
                      
                    </Card>
                    </Cell>
                    
                        
            </Grid>
         </div>
        )
    }
}

export default LoginApply;