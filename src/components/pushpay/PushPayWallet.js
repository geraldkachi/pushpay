import React from 'react' //, { useState } 
import {Input, Label, FormGroup ,Button } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup"
import { useHistory } from "react-router-dom"
import { paymentFormular } from '../paymentsFormula';
import { PushContext } from '../../ContextProvider';


const PushPayWallet = () => {

    // const [dropdownOpen, setOpen] = useState(false)

    // const toggle = () => setOpen(!dropdownOpen)

    const [PaymentContext, setPaymentContext] = React.useContext(PushContext);

    // const {paymentconst, setPayment} = usePaymentContext();
    // let oldPaymentObject = {...paymentconst};
    
    // React.useEffect(() => {
    //     setPayment({...oldPaymentObject, channel: "wallet"})
    // }, [])

    React.useEffect(() => {
        setPaymentContext({...PaymentContext, channel: "wallet"})
            // eslint-disable-next-line
    }, [])

    const history = useHistory()

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
          email: '',
          number:'',
          date: '',
        },
        // setSubmitting
        onSubmit: ({email, number, date,  }) => {
          console.log( `Email: ${email}, Card Number: ${number}, Date: ${date}`)
          setTimeout(function(){ 
            <div><span class="spinner-border spinner-border-sm mr-1"></span> Please wait</div>
            history.push('/payment/card')

         }, 2000)
        },
        validationSchema: Yup.object().shape({
          number: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!'),
          date: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
          email: Yup.string().email('Invalid email').required(''),
        })
      })


    return (
        <div>
             <div className="mx-3" style={{fontSize:"10px", color:'#23609E', fontFamily: 'Work Sans'}}> 
                ADD YOUR PUSHPAY ID
            </div>
            <hr style={{color:"#E0E0E0"}} />

            <div className="justify-content-center align-items-center mx-3">
                <form onSubmit={handleSubmit} className="">
                    <div className="row m-0">
                        <div className="col-md px-0 mx-0">
                            <FormGroup>
                                <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="Card Number">Card number</Label>
                            </FormGroup>
                                <Input style={input} placeholder="pp9012345678" id="number" type="number" name="number" value={values.number} onChange={handleChange} onBlur={handleBlur} />  
                            {touched.number && errors.number ? (<div className='text-danger'>{errors.number}</div>) : (null)}
                        </div>

                    </div>
                        <div className="col-md px-0 mx-0">
                            <Button type="submit" style={paybtn} className="text-center btn-block mx-auto px-5 fs-3 border-0">
                            {/* <span class="spinner-border spinner-border-sm mr-1"></span> */}
                                Pay NGN {paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges}
                            </Button>
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
    marginTop: "1rem"
    
}

const labeltext = {
    fontFamily: "Work Sans",
    fontSize: "10px",
    color: "#23609e",
}

export default PushPayWallet
