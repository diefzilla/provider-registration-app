import React, { useState } from "react";
import FormInput from "./FormInput";
import Table from "./Table";
function Main(){
 const [tableData, setTableData] = useState([])
 const [formInputData, setformInputData] = useState(
     {
     firstName:'',
     lastName:'',
     npiNumber:'',
     address:'',
     phone:'',
     email:''
    }
 );

 const [formIsValid, setFormIsValid] = useState(false);
 
 const deleteTableRows = (index)=>{
    const rows = [...tableData];
    rows.splice(index,1);
    setTableData(rows);
}

 const handleChange=(evnt)=>{ 
     const name = evnt.target.name;
     const value = evnt.target.value; 
     validateField(name,value);
     const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value});
     
    setformInputData(newInput);
    isFormValid();
 }
 const [formErrors, setFormErrors] = useState({firstName: '', lastName: '',npiNumber: '',address: '',phone: '',email: ''});
 const [formValids, setFormValids] = useState({firstName: false, lastName: false,npiNumber: false,address: false,phone: false,email: false});
 const validateField=(fieldName,value)=>{
    let error = '';
    let valid = false;
    switch(fieldName){
        case 'firstName':
                valid = value.length >= 1;
                error = valid ? '': 'Enter First Name';
                break;
            case 'lastName':
                valid = value.length >= 1;
                error = valid ? '': 'Enter Last Name';
                break;
            case 'npiNumber':
                valid = (/^[0-9]{10}$/).test(value);
                error = valid ? '': 'Enter 10 digit NPI number';
                break;
            case 'address':
                valid = value.length > 1;
                error = valid ? '': 'Enter a valid address';
                break;  
            case 'phone':
                valid = (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/).test(value);
                error = valid ? '': 'Enter a valid phone number';
                break;    
            case 'email':
                valid = (/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i).test(value);
                error = valid ? '' : 'Enter a valid email address';
                break;
            default:
                break;
    }   
    const newError = (data)=>({...data, [fieldName]:error});
    const newValid = (data)=>({...data, [fieldName]:valid});
     
    setFormErrors(newError);
    setFormValids(newValid);
 }

 const isFormValid=()=>{
    const checkEmptyInput = Object.values(formInputData).every(result=>result!=="")
    const checkErrorMessages = Object.values(formErrors).every(result=>result==="")
    const checkValidation = Object.values(formValids).every(result=>result===true)
    if(checkEmptyInput && checkErrorMessages && checkValidation)
    {
        setFormIsValid(true);
        return;
    }
    setFormIsValid(false);
 }

 const handleSubmit= (evnt) =>{
    evnt.preventDefault();
    if(formIsValid)
    {
        const newData = (data)=>([...data, formInputData])
        setTableData(newData);
        const emptyInput= {firstName:'',lastName:'',npiNumber:'',address:'',phone:'',email:''}
        setformInputData(emptyInput)
    }
 }  
 return(
     <React.Fragment>
     <div className="container">
     <div className="row">
         <div className="col-sm-8">
         <FormInput handleChange={handleChange} formInputData={formInputData} formErrors={formErrors} handleSubmit={handleSubmit} formIsValid={formIsValid}/>
         <Table tableData={tableData} deleteTableRows={deleteTableRows}/>
         </div>
         <div className="col-sm-4">
         </div>
     </div>
    </div>
    </React.Fragment>
 );
}
export default Main;