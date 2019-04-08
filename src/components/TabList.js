import React, {Component} from 'react';
import {Tabs,Tab,Grid,Cell,Button} from 'react-mdl';
import FaClose from 'react-icons/lib/fa/close';
class TabList extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    render() {
    
      const {sdgdetails} = this.props;
     
        
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Overview</Tab>
                    <Tab>Prerequisites</Tab>
                    <Tab>Visa and Logistics</Tab>
                </Tabs>
                <section>
                   
                    <Grid className="content">
                        <Cell col={12}>
                        <h5>Overview</h5>
                        </Cell>
                        <Cell col={12}>
                            <p> <b>Sustainable development goal
Peace Justice And Strong Institutions</b></p>
                            </Cell>
                            <Cell col={7}>
                            
                           { sdgdetails.sdg_info ? <p>{sdgdetails.sdg_info.sdg_target.description}</p>:""}
                            
                                </Cell>
                                <Cell col={3}>
                                <img  className="sdg-icon" src="https://cdn-expa.aiesec.org/assets/images/sdg_icons_op/16.png" />
                                </Cell>
                                <Cell col={12}>
                                <h5>Role Description</h5>
                                <p>{sdgdetails.description}</p>
                                    </Cell>  
                                    <Cell col={12}>
                                <h5> Main activities</h5>
                                
                                <ul>
                                        {
                                            sdgdetails.role_info ? sdgdetails.role_info.learning_points_list.map((key,ind)=>{
                                                return <li key={ind}>{key}</li>
                                            }):""
                                        }
                                    </ul>
                                    </Cell>
                                    
                                    <Cell col={12}>
                                    <Cell col={7}>
                                <h5>Prerequisites</h5>
                                <div  className={"pre-req-btn"}>You need to be signed in to apply
                                <Button raised colored> Sign In</Button>
                                </div>
                            
                                </Cell>
                                <hr />
                                    </Cell> 
                                    
                                    <Cell col={12}>
                                <h5>Backgrounds</h5>
                                
                                    </Cell> 

                                     <Cell col={10} offset={2} >
                               <ul>
                                   {sdgdetails.backgrounds? sdgdetails.backgrounds.map((ele,ind)=>{
                                       return  <li key={ind}>{ele.name}</li>
                                   }):""}
                                   
                               </ul>
                               <hr/> 
                                    </Cell> 

                                          
                                          <Cell col={12}>
                                <h5>Skills</h5>
                                
                                    </Cell> 

                                     <Cell col={10} offset={2} >
                               <ul>
                                   {sdgdetails.skills? sdgdetails.skills.map((ele,ind)=>{
                                       return  <li key={ind}>{ele.name}</li>
                                   }):""}
                                   
                               </ul>
                               <hr/> 
                                    </Cell> 

                                                 
                                                 <Cell col={12}>
                                <h5>Citizenships</h5>
                                
                                    </Cell> 

                                     <Cell col={10} offset={2} >
                               <ul>
                                   {sdgdetails.nationalities? sdgdetails.nationalities.map((ele,ind)=>{
                                       return  <li key={ind}>{ele.name}</li>
                                   }):""}
                                   
                               </ul>
                               <hr/> 
                                    </Cell>
                                    
                                                 
                                    <Cell col={12}>
                                <h5>Languages</h5>
                                
                                    </Cell> 

                                     <Cell col={10} offset={2} >
                               <ul>
                                   {sdgdetails.languages? sdgdetails.languages.map((ele,ind)=>{
                                       return  <li key={ind}>{ele.name}</li>
                                   }):""}
                                   
                               </ul>
                               <hr/> 
                                    </Cell>
                                                      
                                    <Cell col={12}>
                                <h5> Study Levels</h5>
                                
                                    </Cell> 

                                     <Cell col={10} offset={2} >
                               <ul>
                                   {sdgdetails.study_levels? sdgdetails.study_levels.map((ele,ind)=>{
                                       return  <li key={ind}>{ele.name}</li>
                                   }):""}
                                   
                               </ul>
                               <hr/> 
                                    </Cell>
                                    <Cell col={12}>
                                <h5>Visa and Logistics</h5>
                               
                            
                                </Cell>  
                                <Cell col={3}>
                                Working Hours
                                    </Cell>
                                    <Cell col={7}>
                                        {sdgdetails.specifics_info? sdgdetails.specifics_info.expected_work_schedule.from:""}
                                        to
                                        {sdgdetails.specifics_info? sdgdetails.specifics_info.expected_work_schedule.to:""}
                                        </Cell>
                                        <Cell col={12} offset={3}>
                                        {sdgdetails.specifics_info? sdgdetails.specifics_info.saturday_work?"Working Week end":"Not on weekends":""}
                                       
                                        </Cell>
                                        <Cell col={3}>
                                        Logistics
                                    </Cell>
                                    <Cell col={7}>
                                        {sdgdetails.specifics_info? sdgdetails.specifics_info.computer?<span>Computer Provided</span>:<span><FaClose/>Computer Provided</span>:""}
                                                                           
                                        </Cell>

                                               <Cell col={3}>
                                        Visa
                                    </Cell>
                                    <Cell col={7}>
                                        <div><b>VISA TYPE</b></div>
                                        {sdgdetails.legal_info? <span>{sdgdetails.legal_info.visa_type}</span>:""}
                                                                           
                                        </Cell>

                                            <Cell col={7} offset={3}>
                                        <div><b>VISA DURATION</b></div>
                                        {sdgdetails.legal_info? <span>{sdgdetails.legal_info.visa_duration}</span>:""}
                                                                           
                                        </Cell>
                                        <Cell col={7} offset={3}>
                                        <div><b>VISA LINK</b></div>
                                        {sdgdetails.legal_info? <span><a href={sdgdetails.legal_info.visa_link}> {sdgdetails.legal_info.visa_link}</a></span>:""}
                                        <hr />                             
                                        </Cell>
                                        
                                       <Cell col={3}>
                                       
                                       <h5>Health Insurance</h5>
                                           </Cell>
                                           <Cell col={7}>
                                           {sdgdetails.legal_info? <div> {sdgdetails.legal_info.health_insurance_info}</div>:""}
                                           <hr />   
                                           </Cell>

                                              <Cell col={3}>
                                       
                                       <h5>Host AIESEC office</h5>
                                           </Cell>
                                           <Cell col={7}>
                                           {sdgdetails.host_lc? <div> {sdgdetails.host_lc.full_name}</div>:""}
                                           </Cell>
                                           <Cell col={12}>
                                           <h5>Host AIESEC office</h5>

                                           <p>There are no testimonials for this opportunity, yet</p>
                                           <hr />
                                           </Cell>
                                           
                    </Grid>
                    
                  
                </section>
            </div>    
        );
    }
}

export default TabList;