import React from "react";
import { useForm } from "react-hook-form"
import * as Yup from "yup"
import { Input, Label, FormGroup ,Button } from 'reactstrap';
import { useHistory } from "react-router-dom"

// import PropTypes from 'prop-types'

// react-hook-from uses ref to handle your input

const ReactHookForm = () => {
    const history = useHistory()

    // const sleep = ms => new Promise(resolev => setTimeout(resolve, ms))

    const {register, handleSubmit, errors} = useForm({
        mode: 'onBlur',

        validationSchema: Yup.object({
            // email: Yup.string().max(10, 'Email must be shorter than 10 charaters').required('Required'),
            // email: Yup.string().max(10, 'Email must be shorter than 10 charaters').required(),
            email: Yup.string().email('Invalid email').required('Required'),
            password: Yup.string().min(8, 'Password should be longer than 8 characters').required("Required"),
      
            firstname: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
            lastname: Yup.string().min(2, 'Too Short!').max(10, 'Too Long!').required('Required'),
          })
    })

  const onSubmit = ({email, firstname, lastname, password}) => {
    console.log( `Email: ${email}, Password: ${password}, Firstname: ${firstname}, Lastname: ${lastname}`)
    history.push('formik')
  };

  return (
    <>
      <div className="h-50 card justify-content-center align-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
          <header>
            <h1>React Hook Form</h1>
          </header>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input ref={register} placeholder="Email" id="email" type="email" name="email" />
            </FormGroup>
            {errors.email && <div>{errors.email.message}</div>}
            {/* {errors.email && <div>this is required</div>} */}


            <FormGroup>
            <Label htmlFor="firstname">FirstName</Label>
            <Input ref={register} placeholder="Firstname" id="firstname" type="text" name="firstname" />
            </FormGroup>
            {errors.firstname && <div>{errors.firstname.message}</div>}


          <FormGroup>
            <Label htmlFor="lastname">Lastname</Label>
            <Input ref={register} placeholder="lastname" id="lastname" type="text" name="lastname" />
            </FormGroup>
            {errors.lastname && <div>{errors.lastname.message}</div>}


          <FormGroup>
            <Label htmlFor="passsword">Email</Label>
            <Input ref={register} placeholder="password" id="password" type="password" name="password" />
            </FormGroup>
            {errors.password && <div>{errors.password.message}</div>}

            <Button className="btn text-center">Button</Button>
        </form>
      </div>
    </>
  );
};

// ReactHookForm.propTypes = {};

export default ReactHookForm;
