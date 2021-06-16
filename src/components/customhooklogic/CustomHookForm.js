import React, {useState} from 'react'

const CustomHookForm = () => {
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const {email, password} = data

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        // submit()
        setData({
            email: '',
        password: ''
        })

    }
    const HandleChange = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    return (
        <form className="container justify-content-center align-items-center d-flex h-50">
            <div onSubmit={HandleSubmit}>
                <label>Email</label>
            <input type="email" name="email" value={email} onChange={HandleChange} />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={HandleChange} />
            <button type='submit' className='btn-block btn-success'>Submit</button>
        </div>
        </form>
    )
}

export default CustomHookForm
