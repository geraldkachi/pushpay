
import React from 'react'
import { Form, FormGroup, Label, Input ,Button} from 'reactstrap';
import UseForm from './useForm/UseForm';


const SignIn = () => {

   const { forminput, handleChange, handleSubmit } = UseForm()

    const { email, password} = forminput

   function submit() {
       console.log('submit succesfully')
   }

    return (
        <>
            <div className="container justify-content-center align-items-center d-flex h-50">
                <Form onSubmit={handleSubmit}  className="">      
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input type="email" name="email" value={email} placeholder="Email" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" value={password} placeholder="password" onChange={handleChange} />
                    </FormGroup> 
                    <Button type="submit" className="btn-block btn-success">Press Me Jor</Button>
                </Form>
            </div>
        </>
    )
}

export default SignIn
