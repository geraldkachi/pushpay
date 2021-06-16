import React from 'react'
import { Form, FormGroup, Label, Input ,Button} from 'reactstrap';
import axios from "axios"

const SignUp = () => {

    const [forminput,setForminput] = React.useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirm_password:'',
        textarea: '',
        select: '',
        type:'one'
    })

    const {firstname, lastname, email, password, confirm_password, textarea, select, type} = forminput

    const handleChange = e => {
        const {name, value} = e.target
        setForminput({...forminput, [name]:value })
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        console.log(forminput)
        setForminput({
            firstname:'',
            lastname:'',
            email:'',
            password:'',
            confirm_password:'',
            textarea: '',
            select: '',
            type:'one'

        })

        axios.post(`http://localhost:8000/signup`, forminput)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }
    
    return (
        <>
            <div className="container">
                <Form onSubmit={handleSubmit}  className="">      
                    <FormGroup>
                        <Label for="exampleEmail">First Name</Label>
                        <Input type="text" name="firstname" value={firstname}  placeholder="First Name" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Last Name</Label>
                        <Input type="text" name="lastname" value={lastname} placeholder="Last Name" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" value={email} placeholder="Email" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" value={password} placeholder="password" minLength='6' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Confirm Password</Label>
                        <Input type="password" name="confirm_password" value={confirm_password} placeholder="confirm password" minLength='6' onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleText">Text Area</Label>
                        <Input type="textarea" name="textarea" value={textarea} id="exampleText" onChange={handleChange}  />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Select</Label>
                        <Input type="select" name="select" value={select} id="exampleSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Input>
                    </FormGroup> 
                    {/* the name is the type */}
                    <input type="radio" name="type" value={"one"} checked={type === 'one'} onChange={handleChange}  /> One {' '}
                    <input type="radio" name="type" value={"two"} checked={type === 'two'} onChange={handleChange}  /> Two {' '}
                    <Input type="switch" name='switch' />
                    <Button type="submit" className="btn-block btn-success">Press Me Jor</Button>
                </Form>
            </div>
        </>
    )
}

export default SignUp


//  <form className="container-fluid" onSubmit={handleSubmit}>
// <div class="form-group">
//     <label for="exampleInputEmail1">First Name</label>
//     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
//     onChange={(e)=> {}} />
// </div>
// <div class="form-group">
//     <label for="exampleInputEmail1">Last Name</label>
//     <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
// </div>
// <div class="form-group">
//     <label for="exampleInputEmail1">Email</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
// </div>
// <div class="form-group">
//     <label for="exampleInputPassword1">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" />
// </div>
// <div class="form-group">
//     <label for="exampleInputPassword1">Confirm Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1" />
// </div>
// <button type="submit" class="btn btn-primary">Submit</button>
// </form>