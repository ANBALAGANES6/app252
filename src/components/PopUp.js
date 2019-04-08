
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Form, FormGroup, Label, Input } from 'reactstrap';

class PopUp extends React.Component {
  constructor(props) {
    super(props);
    
  }

componentDidUpdate(){
    //console.log(this.props)
}
  render() {
    const {modalOpen,modalHandle,editRecords,skillSets} =this.props; 
   // console.log(typeof(editRecords),editRecords,editRecords.length)
      const closeBtn = <button className="close" onClick={modalHandle}>&times;</button>;
    const allowedKeys = [`title`,`applications_close_date`,`earliest_start_date`,`latest_end_date`,`description`,`backgrounds`,`skills`,`selection_process`,`salary`,`role_info`]
    const filterList = Object.keys(editRecords).filter(key=>allowedKeys.includes(key)).reduce((obj, key) => {
    obj[key] = editRecords[key];
    return obj;
  },{}) 
  skillSets.map((skil,id)=>{
    console.log(skil)
  })
    
      return (
          
      <div>
          
        
        <Modal isOpen={modalOpen}  className={this.props.className}>
          <ModalHeader close={closeBtn}>Modal title</ModalHeader>
          <ModalBody>
          <Form>
              { Object.keys(filterList).length? Object.keys(filterList).map((ele,index)=>{
                  console.log(ele,index)
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
        </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Update</Button>
            <Button color="secondary" onClick={modalHandle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PopUp;