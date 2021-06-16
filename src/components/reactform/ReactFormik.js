import React from "react";
import { useFormik } from "formik";
import {Input, Label, FormGroup ,Button } from 'reactstrap';
import * as Yup from "yup"
import { useHistory } from "react-router-dom"


const ReactFormik = () => {
  const history = useHistory()

  // const SignupSchema = Yup.object().shape({
  //   firstName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   lastName: Yup.string()
  //     .min(2, 'Too Short!')
  //     .max(50, 'Too Long!')
  //     .required('Required'),
  //   email: Yup.string().email('Invalid email').required('Required'),
  // });

  const {handleSubmit, handleChange, values, touched, errors, handleBlur} = useFormik({
    initialValues: {
      email: '',
      firstname:'',
      lastname: '',
      password: ''
    },
    onSubmit: ({email, password, firstname, lastname}) => {
      console.log( `Email: ${email}, Password: ${password}, Firstname: ${firstname}, Lastname: ${lastname}`)
      history.push('payment')
    },
    validationSchema: Yup.object().shape({
      // email: Yup.string().max(10, 'Email must be shorter than 10 charaters').required('Required'),
      // email: Yup.string().max(10, 'Email must be shorter than 10 charaters').required(),
      email: Yup.string().email('Invalid email').required('Required'),
      password: Yup.string().min(8, 'Password should be longer than 8 characters').required("Required"),

      firstname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
      lastname: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
    })
  })


  return (
    <>
      <form onSubmit={handleSubmit} className='h-50 card justify-content-center align-items-center'>
          <header className="text-center">
            <h3>Formik React</h3>
          </header>
         <FormGroup>
         <Label htmlFor="email">Email</Label>
          <Input placeholder="Email" id="email" type="email" name="email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
         </FormGroup>
         {touched.email && errors.email ? (<div className='text-danger'>{errors.email}</div>) : (null)}


         <FormGroup>
         <Label htmlFor="Firstname">FirstName</Label>
          <Input placeholder="FirstNme" id="firstname" type="text" name="firstname" value={values.firstname} onChange={handleChange} onBlur={handleBlur} />
         </FormGroup>
         <FormGroup>
         {touched.firstname && errors.firstname ? (<div className='text-danger'>{errors.firstname}</div>) : (null)}


         <Label htmlFor="email">Lastname</Label>
          <Input placeholder="lassname" id="lastname" type="text" name="lastname" value={values.lastname} onChange={handleChange} onBlur={handleBlur} />
         </FormGroup>
         {touched.lastname && errors.lastname ? (<div className='text-danger'>{errors.lastname}</div>) : (null)}


          {/*  */}
         <FormGroup>
         <Label htmlFor="password">Passsword</Label>
          <Input  placeholder="Password"  id="password" type="password" name="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
         </FormGroup>
         {touched.password && errors.password ? (<div className='text-danger' >{errors.password}</div>) : (null)}


          <Button type="submit" className="text-center">Login</Button>
      </form>
    </>
  );
};

export default ReactFormik;