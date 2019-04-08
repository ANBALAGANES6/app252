import React ,{Component} from 'react';
import {Cell, Card,CardText,Button ,Grid} from 'react-mdl';
import MdLocationOn from 'react-icons/lib/md/location-on';


class LocationInfo extends Component{

    render(){
       
        const {location} = this.props;
        return (
            <div style={{width: '100%', margin: '1px'}}>
            <Grid >
                    <Card shadow={0}  style={{width: '100%', margin: '' ,color: '#fff', 
                                            height: 'auto', 
                                            background: `url(${location.cover_photo_urls}) center / cover`}}>
                        
                        <CardText  style={{color:'#fafafa',fontWeight:"bold"}} >
                        <Cell offset={5}>
                           <div ><h2 style={{lineHeight:"10px"}}>{location.title}</h2></div>
                            <div className={"location-info"}>
                              <MdLocationOn style={{fontSize:"30px"}}/>
                              {location.location}
                            </div>
                            <div className={"location-info"}><Button raised className={"location-btn"}>Login To Apply</Button>

                             </div>
                             <div className={"applied-status"}>
                                 {location.applied_to?"Applied":"Not Applied"}
                            </div>
                        </Cell>    
                        </CardText>                    
                      
                    </Card>
            </Grid>
           </div>
        )
    }
}

export default LocationInfo;