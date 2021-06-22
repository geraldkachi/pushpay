import React, { useState } from 'react'
import { Input } from "reactstrap"

const Bank = () => {
  const [dropdownOpen, setOpen] = useState(false)

  const toggle = () => setOpen(!dropdownOpen)

    return (
        <div>
            <div className="mx-3" style={{fontSize:"10px", color:'#23609E', fontFamily: 'Work Sans'}}> 
                Choose your bank and enter your account number to start the payment
            </div>
            <hr style={{color:"#E0E0E0"}} />

            <div className="justify-content-center align-items-center">
                <span>
                    <Input type="select" name="backdrop" id="backdrop" 
                        // onChange={changeBackdrop}
                        className="d-flex border border-1 my-3" placeholder="Pick here to choose" caret onClick={toggle} style={{borderColor:"none",boxShadow:'none', borderRadius: "20px"}}>
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
        </div>
    )
}

export default Bank
