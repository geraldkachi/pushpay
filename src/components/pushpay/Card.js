import React from 'react'
import {Input, Label, FormGroup ,Button } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup"
import { useHistory } from "react-router-dom"
import { PushContext } from '../../ContextProvider';
import { paymentFormular } from '../paymentsFormula';
// import { max } from 'moment';


const Card = () => {
    const [PaymentContext, setPaymentContext] = React.useContext(PushContext);

    React.useEffect(() => {
        //  {paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges}
        setPaymentContext({...PaymentContext, channel: "card", processingFee: paymentFormular(PaymentContext?.amount, "card")?.totalCharges })
        console.log(setPaymentContext({...PaymentContext, channel: "card", processingFee: paymentFormular(PaymentContext?.amount, "card")?.totalCharges})
        );
        // eslint-disable-next-line
    }, [PaymentContext])

    const history = useHistory()   

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
          cvv: '',
          number:'',
          date: '',
        },
        onSubmit: ({cvv, number, date, setSubmitting  }) => {
          console.log( `CVV: ${cvv}, Card Number: ${number}, Date: ${date}`)
          setTimeout(function(){ 
            <div><span class="spinner-border spinner-border-sm mr-1"></span> Please wait</div>
            history.push('/payment/card')

         }, 2000)
        },
        validationSchema: Yup.object().shape({
          number: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
          date: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
          cvv: Yup.string().min(2, 'Too Short').max(3, 'Too Long!').required(''),    
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
                                <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="Card Number">Card number</Label>
                            </FormGroup>
                                <Input style={input} placeholder="0000 0000 0000 0000" id="number" type="text" name="number" value={values.number} onChange={handleChange} onBlur={handleBlur} />  
                            {touched.number && errors.number ? (<div className='text-danger'>{errors.number}</div>) : (null)}
                        </div>
                    </div>

                    <div className="row mx-0">
                            <div className="col-sm-6">
                                <FormGroup>
                                <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="date">Expiry date</Label>
                                <Input style={input} placeholder="MM / YY" id="date" type="date" name="date" value={values.date} onChange={handleChange} onBlur={handleBlur} />
                                </FormGroup>
                                {touched.date && errors.date ? (<div className='text-danger'>{errors.date}</div>) : (null)}
                        </div>
                        <div className="col-sm-6">
                        <FormGroup>
                            <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="cvv">CVV</Label>
                            <Input maxLength="3" style={input} placeholder="CVV" id="cvv" type="number" name="cvv" value={values.cvv} onChange={handleChange} onBlur={handleBlur} />
                        </FormGroup>
                        {touched.cvv && errors.cvv ? (<div className='text-danger'>{errors.cvv}</div>) : (null)}
                    </div>
                </div>

                <div className="row mx-0">
                    <div className="col-md">
                        <Button type="submit" style={paybtn} className="text-center btn-block mx-auto px-5 fs-3 border-0">
                        {/* <span class="spinner-border spinner-border-sm mr-1"></span> */}
                            Pay NGN {paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges}
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
    padding: ".5rem"
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
