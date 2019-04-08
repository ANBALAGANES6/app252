import React ,{Component} from 'react';
import axios from 'axios';
import {Row,Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {APIURL,TOKEN} from '../constants/api';
import {Link} from 'react-router-dom'
class Edit extends Component {
    constructor(props) {
      super(props);
      this.state = {opportunity:[],filterList:[]};
    
    }
    getApi = (apiUrl,methodType,args) =>{

    return axios({
            method:methodType,
            url:apiUrl,
            params:args
      })
        
      }
componentDidMount(){
    const { match: { params } } = this.props;   
    let url    = `${APIURL}opportunities/${params.edit_id}`;
    let skillUrl = `${APIURL}lists/skills`;
    let parameter = {access_token:TOKEN}
    this.getApi(url,"GET",parameter).then(response=>{
      this.setState({opportunity:response.data},()=>{
        const allowedKeys = [`title`,`applications_close_date`,`earliest_start_date`,`latest_end_date`,`description`,`backgrounds`,`skills`,`selection_process`,`salary`,`role_info`]
        const filterList = Object.keys(this.state.opportunity).filter(key=>allowedKeys.includes(key)).reduce((obj, key) => {
        obj[key] = this.state.opportunity[key];
        return obj;
      },{})
       // console.log(filterList)
        this.setState({filterList:filterList})
      })
    })

    this.getApi(skillUrl,"GET",parameter).then(response =>{
        this.setState({skillSets:response.data})
    })
    
  
}
  
    render() {
        const {filterList,skillSets} = this.state;
        const { match: { params } } = this.props;  
      return (
        <div>
          <Row>
              <Col xs={4} style={{position:"absolute",left:"35%"}}>
          <Form>
              { Object.keys(filterList).length? Object.keys(filterList).map((ele,index)=>{
                  
     return  ( <FormGroup key={index}>
          <Label for="exampleEmail">{ele}</Label>
          { ele===`skills`?
           <Input type="select" name="select" id="exampleSelect">
           {skillSets.map((skill,k)=>{
               
            return <option key={k} value={skill.id} select={skill.id === filterList[ele][0].id?"true":"false"}>{skill.name}</option>
           })
        }
         </Input>
          :
            ele=== `role_info`?<Input type="text" name="email" id="exampleEmail" value={filterList[ele].city} placeholder="with a placeholder" />:
            ele=== `backgrounds`?
            <Input type="text" name="email" id="exampleEmail" value={filterList[ele].map((e,i)=>{return e.name})} placeholder="with a placeholder" />:
          <Input type="text" name="email" id="exampleEmail" value={filterList[ele]} placeholder="with a placeholder" />
           } </FormGroup>)}):
        ''
              }
               <Button>Submit</Button>
               <Link to="/opportunity/6125"><Button>Cancel</Button>
               </Link>
        </Form>
        </Col>
        </Row>
        </div>
      );
    }
  
}

export default Edit;