import React, { useState, useEffect, useContext} from 'react'
import {Input, Label, FormGroup ,Button } from 'reactstrap';
import { useFormik } from "formik";
import * as Yup from "yup"
import { useHistory } from "react-router-dom"
// import { withRouter } from 'react-router-dom'
import {ReactComponent as PushP} from "./img/pushp.svg"
import { CartContext } from '../../ContextProvider';

const Stech = () => {

  const history = useHistory()

  const [render, setRender] = useState(null)
  const [showData, setShowData] = useState(true)
  const [paymentInfo, setPaymentInfo] = useContext(CartContext)

  const onChange = ({ target }) => {
    setRender({ ...render, [target.name]: target.value }) 
  }
  
  useEffect(() => {
    if (render !== null){
      //setShowData(true)
    } 
  }, [render])


    // const [show, setShow] = useState(false);
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      if (loading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [loading]);
   

    const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
        initialValues: {
          email: '',
          firstname:'',
          lastname: '',
          number: ""
        },


        // setSubmitting
        onSubmit: ({email, firstname, lastname, number }) => {
          console.log( `Email: ${email}, Firstname: ${firstname}, Lastname: ${lastname}, Amount: ${number} `)
          setPaymentInfo({...paymentInfo, amount: number})
          setShowData(false)
          setTimeout(function(){ 
            
            //<div><span className="spinner-border spinner-border-sm mr-1"></span> Please wait</div>
            history.push('/payment/card')

         }, 2000)
        },
        validationSchema: Yup.object().shape({
          email: Yup.string().email('Invalid email').required(''),    
          firstname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
          lastname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required(''),
        })
      })

      // const helloHandeler = () => {
      //   setTimeout(() => {
      //     setloading(!loading)
      //   }, 2000)
      //   setShow(!show);
      // };
       if (loading) return <span class="spinner-border spinner-border-sm mr-1" role="status" aria-hidden="true"></span>

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-center mx-3">
        <div className=""  style={{width: "400px"}}>
          <header className="text-center">
            <div className="text-center my-3">
                <PushP />
            </div>
            <p className="fs-1" style={{textTransform: "uppercase",letterSpacing: "1px", fontFamily: 'Work Sans'}}>BY NASKKO TECH</p>
          </header>
           <form onSubmit={handleSubmit} className='rounded-3 border border-2 p-4' style={{background: "#f7f7f7", borderRadius:'20px'}}>
          <div className="row m-0">
              <div className="col-md">
                  <FormGroup>
                      <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="Firstname">First name</Label>
                      <Input style={input} placeholder="First name" id="firstname" type="text" name="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} />  
                  </FormGroup>
                  {touched.firstname && errors.firstname ? (<div className='text-danger'>{errors.firstname}</div>) : (null)}
              </div>
              <div className="col-md">
                    <FormGroup>
                    <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="email">Last name</Label>
                      <Input style={input} placeholder="last name" id="lastname" type="text" name="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} />
                    </FormGroup>
                    {touched.lastname && errors.lastname ? (<div className='text-danger'>{errors.lastname}</div>) : (null)}

              </div>
          </div>

          <div className="row mx-0">
              <div className="col-md">
              <FormGroup>
                  <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="email">Email address</Label>
                  <Input style={input} placeholder="Email" id="email" type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
              </FormGroup>
              {touched.email && errors.email ? (<div className='text-danger'>{errors.email}</div>) : (null)}


              <FormGroup>
                  <Label style={labeltext} className="fs-1 fw-bolder" htmlFor="number">Amount</Label>
                  <Input style={input} placeholder="Amount" id="number" type="tel" name="number" value={values.number} onChange={handleChange} onBlur={handleBlur} />
              </FormGroup>
              {touched.number && errors.number ? (<div className='text-danger'>{errors.number}</div>) : (null)}
          {/*  */}

          {showData && (
              <Button type="submit" style={paybtn} className="text-center btn-block mx-auto px-5 fs-3">
                {/* Pay NGN 1,000.00 */}
                AMOUNT
              </Button>
            )}

            {!showData && (
               <Button type="submit" style={paybtn} onChange={onChange} className="text-center btn-block mx-auto px-5 fs-3">
               <span className="spinner-border spinner-border-sm mr-1"></span>Please...
             </Button>
            )}

            {/* <div class="spinner-border-sm text-light" role="status">
              <span class="visually-hidden">Loading...</span>
            </div> */}
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
    outline: "none",
    // padding: "1.5rem",
    borderRadius: "20px",
    marginTop: "2.5rem",
    fontFamily: 'Work Sans',
}

const input ={
    padding: "1rem",
    outline: "none",
    borderWeight: "1px",
    borderColor: "#ccc",
    borderRadius: "20px",
    fontFamily: 'Work Sans'
}

const labeltext = {
    fontFamily: "Work Sans",
    fontSize: "10px",
    color: "#23609e",
}

export default Stech





// export default function App() {
//   const [show, setShow] = useState(false);
//   const [loading, setLoading] = useState(false);

  // const helloHandeler = () => {
  //   setLoading(!loading);
  //   setTimeout(() => {
  //     setLoading(loading);
  //     setShow(!show);
  //   }, 2000);
  // };
//   const helloHandeler = () => {
//     setLoading(!loading);
//     setShow(!show);
//   };

//   useEffect(() => {
//     if (loading) {
//       setTimeout(() => {
//         setLoading(false);
//       }, 2000);
//     }
//   }, [loading]);

//   if (loading) return <Spinner />;

//   return (
//     <div className="App">
//       <h1>Adding a Spinner</h1>
//       <div className="bodyContainer">
//         {!show && <button onClick={helloHandeler}>Click me</button>}
//         {show && <Hello />}
//       </div>
//     </div>
//   );
// }
