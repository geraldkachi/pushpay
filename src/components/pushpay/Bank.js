import React, { useState, useEffect } from 'react'

import {Input, Label, FormGroup ,Button } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup"
import { PushContext } from '../../ContextProvider';
import { paymentFormular } from '../paymentsFormula';


const Bank = () => {

  const { paymentState, setPaymentState} = React.useContext(PushContext);

  const pValue = paymentFormular(paymentState?.amount, "bank")

    React.useEffect(() => {
      if (paymentState.processingFee !== pValue.totalCharges) {
        setPaymentState({...paymentState, channel: "bank", processingFee: pValue? pValue.totalCharges: 0})
    }
      // setPaymentState({...paymentState, channel: "bank"})
      // eslint-disable-next-line
    }, [])

  const [dropdownOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!dropdownOpen)
    
  const [render, setRender] = useState(null)
  const [showData, setShowData] = useState(false)
  // const [count,setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false);


  const onChange = ({ target }) => {
    setRender({ ...render, [target.name]: target.value })
    setIsLoading(true)
  //   setCount([Math.floor((Math.random()* 100000000000000))])

    // setRender({ ...render, [target.name]: target.value })
    // setCountThree([Math.floor((Math.floor(Math.random() * 1000) + 1))])
  }

    useEffect(() => {

      setTimeout(() => {
        if (render !== null){
          setShowData(true)
        } 
          setIsLoading(false)
        }, 1000)
      
      return () => setIsLoading(true)
    }, [render])


    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
      initialValues: {
        email: '',
        number:'',
        date: '',
      },
      onSubmit: ({email, number, date,  }) => {
        console.log( `Email: ${email}, Card Number: ${number}, Date: ${date}`)
        setTimeout(function(){ 
          <div><span class="spinner-border spinner-border-sm mr-1"></span> Please wait</div>
          // history.push('/payment/card')

       }, 2000)
      },
      validationSchema: Yup.object().shape({
        number: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
        date: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
        email: Yup.string().email('Invalid email').required(''),    
      })
    })

    return (
        <div>
            <div className="mx-3" style={{fontSize:"10px", color:'#23609E', fontFamily: 'Work Sans'}}> 
                Choose your bank and enter your account number to start the payment
            </div>
            <hr style={{color:"#E0E0E0"}} />

            <div className="justify-content-center align-items-center" onChange={onChange}>
                <span>
                    <Input type="select" name="backdrop" id="backdrop" 
                        className="d-flex border border-1 my-3" placeholder="Pick here to choose" onClick={toggle} style={{borderColor:"none",boxShadow:'none', borderRadius: "20px"}}>
                        <option className="" value="true">Pick here to choose</option>
                        <option className="" value="true">United Bank for Africa</option>
                        <option className="" value="false">Zenith Bank</option>
                        <option className="" value="false">Sterling Bank</option>
                        <option className="" value="static">Guaranty Trust Bank</option>
                        <option className="" value="static">Polaris Bank</option>
                        <option className="" value="static">Polaris Bank</option>
                        <option className="" value="static">Unity Bank</option>
                        <option className="" value="static">Eco Bank</option>
                        <option className="" value="static">Access Bank</option>
                        <option className="" value="static">Fidelity Bank</option>
                        <option className="" value="static">First Bank</option>
                        <option className="" value="static"> Bank</option>
                    </Input>
                </span>
            </div>  


            {isLoading && (
                <div className="d-flex justify-content-center align-items-center">
                    <span className="spinner-border text-success spinner-border-sm mr-1"></span> Please wait
                </div>
            )}

            {showData &&(
                <div className="mx-auto mt-5" onChange={onChange}>
                    {/* <p style={{fontSize: "25px", fontFamily: "Work Sans"}}>{options.find(option => option.bank === render.bank)?.ussd}*{countThree}*{count}#</p> */}
                    <div className="justify-content-center align-items-center mx-3">

                  <form onSubmit={handleSubmit} className="">
                      <div className="row m-0">
                          <div className="col-md px-0 mx-0">
                              <FormGroup>
                                  <Label style={labeltext} className="fs-1 fw-bolder ml-2" htmlFor="Card Number">Card number</Label>
                                  <Input style={input} placeholder="pp9012345678" id="number" type="text" name="number" value={values.number} onChange={handleChange} onBlur={handleBlur} />  
                              </FormGroup>
                              {touched.number && errors.number ? (<div className='text-danger'>{errors.number}</div>) : (null)}
                          </div>

                      </div>
                          <div className="col-md px-0 mx-0">
                              <Button type="submit" style={paybtn} className="text-center btn-block mx-auto px-5 fs-3 border-0" onClick={()=> alert('Bank don enter')}>
                              {/* <span class="spinner-border spinner-border-sm mr-1"></span> */}
                                Pay NGN {parseInt(paymentFormular(paymentState?.amount, paymentState?.channel)?.totalCharges).toLocaleString()}
                              </Button>
                          </div>
                  </form>
                </div>
                </div>
                )}

              {/* <select name="bank" onChange={onChange} className="text-center" >
                <option hidden>Click here to choose</option>
                {options.map((option) => (
                    <option value={option.bank}>{option.bank}</option>
                ))}
            </select> */}

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
  padding: ".5rem"
}

const input = {
  paddingTop: "1rem",
  paddingBottom: "1rem",
  outline: "none",
  borderWeight: "1px",
  borderColor: "#F2F2F2",
  // color: "#828282",
  borderRadius: "20px",
  fontFamily: 'Work Sans',
  fontSize: "10px",
  // marginTop: "1rem"
  
}

const labeltext = {
  fontFamily: "Work Sans",
  fontSize: "10px",
  color: "#23609e",
}

export default Bank
