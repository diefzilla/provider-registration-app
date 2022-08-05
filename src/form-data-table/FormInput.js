function FormInput({handleChange, formInputData, formErrors, handleSubmit, formIsValid}){
    return(
        <div className="form-row row">
          <h2>Please complete this form to register a new provider.</h2>
        <div className="col">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" onChange={handleChange} value={formInputData.firstName} name="firstName" className="form-control" placeholder="First Name" />
        </div>
        <div className="col">
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" onChange={handleChange} value={formInputData.lastName} name="lastName" className="form-control" placeholder="Last Name" />
        </div>
        <div className="col">
          <label htmlFor="npiNumber">NPI Number: </label>
          <input type="text" onChange={handleChange} value={formInputData.npiNumber} name="npiNumber" className="form-control" placeholder="NPI Number" />
        </div>
        <div className="col">
          <label htmlFor="address">Business Address:</label>
          <input type="text" onChange={handleChange} value={formInputData.address} name="address" className="form-control" placeholder="Business Address" />
        </div>
        <div className="col">
          <label htmlFor="phone">Phone Number:</label>
          <input type="text" onChange={handleChange} value={formInputData.phone} name="phone" className="form-control" placeholder="Phone Number" />
        </div>
        <div className="col">
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={handleChange} value={formInputData.email} name="email" className="form-control" placeholder="Email Address" />
        </div>
        <div className="col">
          <input type="submit" onClick={handleSubmit} className="btn btn-primary" value="Register" 
                  disabled={!formIsValid}/>
        </div>
        <div className="col">
          {formIsValid} -- 
          {Object.values(formErrors)}
        </div> 
      </div>
      
    )
    }
    export default FormInput;