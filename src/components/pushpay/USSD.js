import React, { useState,useEffect } from "react";
import { Input, Button } from "reactstrap"
import { PushContext } from '../../ContextProvider';
import { paymentFormular } from '../paymentsFormula';


const USSD = () => {
    const [PaymentContext, setPaymentContext] = React.useContext(PushContext);

        const options = [
            {
                bank: 'First Bank',
                ussd: '894'
            },
            {
                bank: 'Polaris Bank',
                ussd: '784'
            },
            {
                bank: 'Access Bank',
                ussd: '124'
            },
            {
                bank: 'Kuda Bank',
                ussd: '994'
            }
        ]

        

            // console.log(PaymentContext);
        React.useEffect(() => {
            //  {paymentFormular(PaymentContext?.amount, PaymentContext?.channel)?.totalCharges}
            setPaymentContext({...PaymentContext, channel: "ussd" })
            // console.log({...PaymentContext, channel: "ussd" })
            // setPaymentContext({...PaymentContext, channel: "ussd", processingFee: paymentFormular(PaymentContext?.amount, "ussd")?.totalCharges })
            // console.log(setPaymentContext({...PaymentContext, channel: "ussd", processingFee: paymentFormular(PaymentContext?.amount, "ussd")?.totalCharges}));
            // eslint-disable-next-line
        }, [])

    const [dropdownOpen, setOpen] = useState(false)

    const toggle = () => setOpen(!dropdownOpen)

    const [render, setRender] = useState(null)
    const [showData, setShowData] = useState(false)
    const [count,setCount] = useState(0)
    const [countThree,setCountThree] = useState(0)

    const [isLoading, setIsLoading] = useState(false);


    const onChange = ({ target }) => {
        setRender({ ...render, [target.name]: target.value })
        setCount([Math.floor((Math.random()* 100000000000000))])

        setRender({ ...render, [target.name]: target.value })
        setCountThree([Math.floor((Math.floor(Math.random() * 1000) + 1))])
        setIsLoading(true)
    }
    useEffect(() => {
        setTimeout(() => {
            if (render !== null){
                setShowData(true)
            }
            setIsLoading(false)
        }, 3000)
        return () => setIsLoading(true)

    }, [render])
    

    return (
        <div>
            <div className="mx-3" style={{fontSize:"10px", color:'#23609E', fontFamily: 'Work Sans'}}> 
                CHOOSE YOUR BANK TO START THE PAYMENT
            </div>
            <hr style={{color:"#E0E0E0"}} />

            <div className="justify-content-center align-items-center">
                <span>
                    <Input type="select" name="backdrop" id="backdrop" onChange={onChange} 
                        // onChange={changeBackdrop}
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
                <div className="mx-auto text-center mt-5">
                    <p style={{fontSize: "25px", fontFamily: "Work Sans"}}>{options.find(option => option.bank === render.bank)?.ussd}*{countThree}*{count}#</p>

                    <Button type="submit" onClick={()=> alert('USSD has paid successfully')} style={paybtn} className="text-center btn-block mx-auto px-5 fs-3 border-0 mt-5">
                       Pay NGN {parseInt(paymentFormular((PaymentContext?.amount, PaymentContext?.channel)?.totalCharges)).toLocaleString()}
                    </Button>
                </div>
            )}
            

            {/* <select name="bank"  >
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

export default USSD
