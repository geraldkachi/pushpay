import React from 'react';
import { Form, FormGroup, Label, Input, FormText, CustomInput ,Button } from 'reactstrap';

const TypeInput = () => {

    const [forminput,setForminput] = React.useState({
        firstname:'',
        lastname:'',
        email:'',
        password:'',
        confirm_password:'',
        url:'',
        number:'',
        datetime:'',
        date:'',
        time:'',
        color:'',
        search:'',
        select:'',
        selectMulti:'',
        textarea:'',
        file:'',
        range:'',
        radio: false,
        checkbox: false,
        swtch:''
    })

    const {firstname, lastname, email, password, confirm_password, url, number, datetime, date, time, color, search, select, selectMulti, textarea, file, range, radio, checkbox, swtch } = forminput

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
            url:'',
            number:'',
            datetime:'',
            date:'',
            time:'',
            color:'',
            search:'',
            select:'',
            selectMulti:'',
            textarea:'',
            file:'',
            range:'',
            radio: false,
            checkbox: false,
            swtch:''
        })
    }

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
            {/* <FormGroup>
                <Label for="examplePlain">Plain Text (Static)</Label>
                <Input plaintext value="Some plain text/ static value" />
            </FormGroup> */}
            <FormGroup>
                <Label for="exampleFirstname">First Name</Label>
                <Input type="text" name="firstname" value={firstname} id="exampleFirstname" placeholder="first name"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleLastname">Last Name</Label>
                <Input type="lastname" name="lastname" value={lastname} id="exampleLastname" placeholder="last name"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" value={email} id="exampleEmail" placeholder="email"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" value={password} id="examplePassword" placeholder="password"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Confirm_Password</Label>
                <Input type="password" name="confirm_password" value={confirm_password} id="exampleConfirmPassword" placeholder="confirm password"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleUrl">Url</Label>
                <Input type="url" name="url" value={url} id="exampleUrl" placeholder="url placeholder"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleNumber">Number</Label>
                <Input type="number" name="number" value={number} id="exampleNumber" placeholder="number placeholder"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDatetime">Datetime</Label>
                <Input type="datetime" name="datetime" value={datetime} id="exampleDatetime" placeholder="datetime placeholder"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleDate">Date</Label>
                <Input type="date" name="date" value={date} id="exampleDate" placeholder="date placeholder"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleTime">Time</Label>
                <Input type="time" name="time" value={time} id="exampleTime" placeholder="time placeholder"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleColor">Color</Label>
                <Input type="color" name="color" value={color} id="exampleColor" placeholder="color placeholder"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSearch">Search</Label>
                <Input type="search" name="search" value={search} id="exampleSearch" placeholder="search placeholder"
                onChange={handleChange} />
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input type="select" name="select" value={select} id="exampleSelect"  onChange={handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input type="select" name="selectMulti" value={selectMulti} id="exampleSelectMulti" multiple onChange={handleChange}>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" className="form-control" name="textarea" value={textarea} id="exampleTextarea" onChange={handleChange}/>
            </FormGroup>
            <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" value={file} id="exampleFile" onChange={handleChange} />
                <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
                </FormText>
            </FormGroup>
            <FormGroup>
                <Label for="exampleRange">Range</Label>
                <input type="range" name="range" value={range} id="exampleRange" onChange={handleChange} className="w-100"/>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="radio" value={radio} onChange={handleChange} /> Option one is this and that—be sure to
                include why it's great
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                <Input type="checkbox" value={checkbox} onChange={handleChange} /> Check me out
                </Label>
            </FormGroup>
            <FormGroup>
            <Label for="exampleCheckbox">Switches</Label>
            <div>
            <CustomInput type="switch" name="customSwitch" value={swtch} id="exampleCustomSwitch" label="Turn on this custom switch" onChange={handleChange}/>
            <CustomInput type="switch" name="customSwitch" value={swtch} id="exampleCustomSwitch2" label="Or this one" onChange={handleChange}/>
            <CustomInput type="switch" name="customSwitch" value={swtch} id="exampleCustomSwitch3" label="But not this disabled one" onChange={handleChange}/>
            <CustomInput type="switch" name="customSwitch" value={swtch} id="exampleCustomSwitch4" label="Can't click this label to turn on!" htmlFor="exampleCustomSwitch4_X" onChange={handleChange}/>
            </div>
            </FormGroup>
            <Button type="submit">Submit</Button>
        </Form>
        </div>
    )
}

export default TypeInput
