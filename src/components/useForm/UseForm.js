import 
// React,
 { useState } from 'react'
import axios from 'axios';

const UseForm = () => {

    const [forminput,setForminput] = useState({
        email:'',
        password:'',
    })

    const [errors, setErrors] = useState({
        email:'',
        password:'',
    })

    const handleSubmit = e => {
        e.preventDefault()
        console.log(forminput);
        setForminput({
            email:'',
            password:'',
        })
        // callback()

        axios.post(`http://localhost:8000/sigin`, forminput)
        .then(res => console.log(res.data))
        .catch(err => console.error(err))
    }

    const handleChange = e => {
        const {name, value} = e.target
        setForminput({...forminput, [name]:value })
    }

    return {forminput,handleChange, handleSubmit}
}

export default UseForm
