import React, {Component} from 'react';
import { Table,Button } from 'reactstrap';
import Pagination from "react-js-pagination"
//import * as moment from 'moment';
import 'bootstrap-less/bootstrap/bootstrap.less';

import GoogleApiWrapper from './MapApi'
import axios from 'axios';
import PopUp from './PopUp'
//import fetch from 'fetch';

class ApplicationList extends Component{
    constructor(props){
        super(props)
        this.state ={tableHeading:[`#`,`Title`,`Application Close Date`,
                                    `Earliest Start Date`,`Latest End Date`,
                                    `Description`,`Backgrounds`,`Skills`, 
                                    `Selection Process`,`Salary`,`City`,"Edit"],
                    tableData:[],
                    activePage: 1,
                    totalItem:0,
                    modal: false
                    }
    }
    
    get(api,arg){
        // console.log(url)
        // let promise = new Promise((reslove,reject)=>{
        //     fetch(url).then(response=>{
        //        reslove(response.then(data=>{
        //        return    data.results;
        //        }))
        //     }).catch(response=>{
        //         reject("Api call failed")
        //     })
        // })
        // promise.then((reslove) => {
        //     console.log(reslove);
        // }, (error) => {
        //     console.log(error);
        // });
        axios({
            method:"GET",
            url: api,
            params:arg
        }).then(response=>{
            console.log(response.data)
            let result = response.data;
            this.setState({tableData:result.data,totalItem:result.paging.total_items})
        }).catch(error=>{
            console.log(error);
        })
    }

    componentDidMount(){
        let url ="http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities";
        let parm={access_token:"dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c",
                    page:1};
        this.get(url,parm)
        console.log('mounted')
    }
    handlePageChange(pageNumber) {
        //console.log(e)
        let url ="http://gisapi-web-staging-1636833739.eu-west-1.elb.amazonaws.com/v2/opportunities";
        let parm={access_token:"dd0df21c8af5d929dff19f74506c4a8153d7acd34306b9761fd4a57cfa1d483c",
        page:pageNumber};
        this.get(url,parm)
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }
    handleEdit = (editID) =>{
        console.log(editID,this.state.modal)
        this.setState({modal:!this.state.modal})
        
    } 
    render(){
        const mapStyles = {
            width: '100%',
            height: '100%'
          };
          
        const {tableHeading,tableData,totalItem,activePage} = this.state;
        console.log(tableData)
        return(
           <React.Fragment>
              {/* < GoogleApiWrapper /> */}
                   <Table responsive hover>
        <thead>
          <tr>
            {
               tableHeading.map((title,index)=>{
               return <th key={index}> {title}</th>
            })
           /* tableHeading.forEach(title=>{
                return <th>{title}</th>
            })*/
            }
          </tr>
        </thead>
        <tbody>
            { tableData.length ? tableData.map((ele,ind) =>{
                return <tr key={ind}>
                            <td>{ele.id}</td>
                            <td>{ele.title}</td>
                            <td>{ele.applications_close_date}</td>
                            <td>{ele.earliest_start_date}</td>
                            <td>{ele.latest_end_date}</td>
                            <td>{ele.description}</td>
                            <td>{ele.backgrounds}</td>
                            <td>{ele.skills}</td>
                            <td>{ele.selection_process}</td>
                            <td>{ele.salary}</td>
                            <td>{ele.location}</td>
                            <td><PopUp buttonLabel={"Edit"} handleEdit={()=>this.handleEdit(ele.id)} /></td>
                        </tr>
            }):<tr><td colSpan="10">No Data Found</td></tr>
            }
         
  
        </tbody>
      </Table>
      <Pagination
          activePage={activePage}
          itemsCountPerPage={25}
          totalItemsCount={totalItem}
          pageRangeDisplayed={20}
          onChange={(e)=>this.handlePageChange(e)}
        />
      </React.Fragment>
        )
    }

}

export default ApplicationList;

