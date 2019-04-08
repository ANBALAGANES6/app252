import React, { Component } from 'react';
import { Layout} from 'react-mdl';
import TopNav from './components/TopNav'
import LocationInfo from './components/LocationInfo'
import LoginApply from './components/LoginApply';
import axios from 'axios';
import {APIURL,TOKEN} from './constants/api';

class Home extends Component {
  constructor(props){
    super(props)
    this.state = ({opportunity:[],loactionDetails:[],positionDetails:[],sdgDetails:[]})
  }
  getApi = (apiUrl,methodType,args) =>{

    // let promise = new Promise((resolve,reject)=>{
    //       axios({
    //             method:methodType,
    //             url:apiUrl,
    //             params:args
    //       }).then(response=>{
    //         resolve(response=> (
    //             response
    //        ))
           
    //       }).catch(response=>{
    //         reject("api call failed")
    //           console.log(response)
    //       })
    // }).then(response=>{
    //   console.log(response);
    // }).catch(error=>{
    //   console.log(error);
    // }) 
    // console.log(promise)

  
      return axios({
        method:methodType,
        url:apiUrl,
        params:args
  })
    
  }

  componentDidMount(){
      const { match: { params } } = this.props;   
      let url    = `${APIURL}opportunities/${params.opportunity_id}`;
      let parameter = {access_token:TOKEN}
        this.getApi(url,"GET",parameter).then(response=>{
          this.setState({opportunity:response.data},()=>{
            
          })
          const locationLabel = ["title","location","cover_photo_urls","applied_to"];
          const positionLabel   = ["languages","duration","earliest_start_date",
                                 "latest_end_date","specifics_info","openings"];
          const sdgLabel        = ["sdg_info","description","role_info","backgrounds",
                                   "skills","nationalities","languages","study_levels",
                                    "specifics_info","logistics_info","legal_info","host_lc"];                                 
          const loactionDetails = Object.keys(this.state.opportunity)
                                .filter(key => locationLabel.includes(key))
                                .reduce((obj, key) => {
                                  obj[key] = this.state.opportunity[key];
                                  return obj;
                                }, {});
          const positionDetails = Object.keys(this.state.opportunity)
                                .filter(key => positionLabel.includes(key))
                                .reduce((obj, key) => {
                                  obj[key] = this.state.opportunity[key];
                                  return obj;
                                }, {}); 
          const sdgDetails    = Object.keys(this.state.opportunity)
                                .filter(key => sdgLabel.includes(key))
                                .reduce((obj, key) => {
                                  obj[key] = this.state.opportunity[key];
                                  return obj;
                                }, {});                                        
          this.setState({loactionDetails:loactionDetails,
                        positionDetails:positionDetails,
                      sdgDetails:sdgDetails});
        })
        
      
  }
  scrollHandler =()=>{
	  console.log(document.scrollTop);
  }
  render() {
    const {opportunity,loactionDetails,positionDetails,sdgDetails} = this.state;
    
    return (
      <div className="App" onScroll={(e)=>this.scrollHandler(e)}>
     
          <Layout fixedHeader>
            <TopNav />
            <LocationInfo location={loactionDetails}/>
            <LoginApply position={positionDetails} sdginfo={sdgDetails}/>
            
          </Layout>
        
        </div>
    );
  }
}

export default Home;
