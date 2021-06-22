import React from 'react'
import {Input, Label, FormGroup ,Button } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup"
import { useHistory } from "react-router-dom"


const Card = () => {

    const history = useHistory()

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
          email: '',
          firstname:'',
          lastname: '',
        },
        onSubmit: ({email, firstname, lastname, setSubmitting  }) => {
          console.log( `Email: ${email}, Firstname: ${firstname}, Lastname: ${lastname}`)
          setTimeout(function(){ 
            <div><span class="spinner-border spinner-border-sm mr-1"></span> Please wait</div>
            history.push('/payment/card')

         }, 2000)
        },
        validationSchema: Yup.object().shape({
          email: Yup.string().email('Invalid email').required(''),    
          firstname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
          lastname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
        })
      })

    return (
        <div>
            <div className="mx-3" style={{fontSize:"10px", color:'#23609E', fontFamily: 'Work Sans'}}> 
                ADD YOUR PUSHPAY ID
            </div>
            <hr style={{color:"#E0E0E0"}} />


            <div>
                <form onSubmit={handleSubmit} className="">
                    <div className="row m-0">
                        <div className="col-md">
                            <FormGroup>
                                <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="Firstname">Card number</Label>
                                <Input style={input} placeholder="0000 0000 0000 0000" id="firstname" type="text" name="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} />  
                            </FormGroup>
                            {touched.firstname && errors.firstname ? (<div className='text-danger'>{errors.firstname}</div>) : (null)}
                        </div>
                    </div>

                    <div className="row mx-0">
                            <div className="col-sm-6">
                                <FormGroup>
                                <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="email">Expiry date</Label>
                                <Input style={input} placeholder="MM / YY" id="lastname" type="text" name="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} />
                                </FormGroup>
                                {touched.lastname && errors.lastname ? (<div className='text-danger'>{errors.lastname}</div>) : (null)}
                        </div>
                        <div className="col-sm-6">
                        <FormGroup>
                            <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="email">CVV</Label>
                            <Input style={input} placeholder="CVV" id="email" type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        </FormGroup>
                        {touched.email && errors.email ? (<div className='text-danger'>{errors.email}</div>) : (null)}
                    </div>
                </div>

                <div className="row mx-0">
                    <div className="col-md">
                        <Button type="submit" style={paybtn} className="text-center btn-block mx-auto px-5 fs-3 border-0">
                        {/* <span class="spinner-border spinner-border-sm mr-1"></span> */}
                            Pay NGN 150
                        </Button>
                    </div>
                </div>
        </form>
            </div>
        </div>
    )
}

const paybtn = {
    // width: "100%",
    backgroundColor: "#3bb75e",
    color: "#fff",
    cursor: "pointer",
    border: "none",
    fontSize:".9rem",
    outline: "none",
    // padding: "1.5rem",
    borderRadius: "20px",
    marginTop: "2.5rem",
    fontFamily: 'Work Sans',
    padding: ".8rem"
}

const input ={
    paddingTop: "1rem",
    paddingBottom: "1rem",
    outline: "none",
    borderWeight: "1px",
    borderColor: "#F2F2F2",
    // color: "#828282",
    borderRadius: "20px",
    fontFamily: 'Work Sans',
    fontSize: "10px",
    marginTop: "1rem"
    
}

const labeltext = {
    fontFamily: "Work Sans",
    fontSize: "10px",
    color: "#23609e",
}

export default Card
