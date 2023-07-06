import React, { useState } from 'react';

const UserForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstErr, setFirstErr] = useState("")
    const [lastErr, setLastErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [confirmPasswordErr, setConfirmPasswordErr] = useState("")

    const submitForm = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        console.log(formData);

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
        })
    }

        const handleChange = e => {
            const {name, value} = e.target
            setFormData((currentData) => ({...currentData, [name]: value}))
            setFormData({...formData, [name]: value})


            if (name == 'firstName' && value.length < 2) {
                setFirstErr("First Name too short!")
            } else if (name == 'firstName') {
                setFirstErr("")
                setFirstName(value)
            }

            if (name == 'lastName' && value.length < 2) {
                setLastErr("Last Name too short!")
            } else if (name == 'lastName') {
                setLastErr("")
                setLastName(value)
            }

            if (name == 'email' && value.length < 5) {
                setEmailErr("Email too short!")
            } else if (name == 'email') {
                setEmailErr("")
                setEmail(value)
            }
            // Password
            if (name == 'password' && value.length < 5) {
                setPasswordErr("Password too short!")
            } else if (name == 'password') {
                setPasswordErr("")
                setPassword(value)
            }
            // confirm Password
            if (name == 'confirmPassword' && formData.password != value) {
                setConfirmPasswordErr("Passwords do not match")
            } else if (name == 'confirmPassword') {
                    setConfirmPasswordErr("")
                    setConfirmPassword(value)
            }
        }

        const formStyle = {
            width: 400
    
        }
    
        const errStyle = {
            margin: 0,
            padding: 0,
            color: "red",
            fontWeight: "bold"
        }



    return (
        <form style={formStyle} onSubmit={submitForm}>
            <fieldset>

                {/* first name */}
                <div>
                    <p style={errStyle} >{firstErr}</p>
                    <label>First Name: </label>
                    <input name="firstName" type="text" value={formData.firstName} onChange={handleChange}></input>
                </div>
                <br></br>

                {/* last name */}
                <div>
                    <p style={errStyle} >{lastErr}</p>
                    <label>Last Name: </label>
                    <input name="lastName" type="text" value={formData.lastName} onChange={handleChange}></input>
                </div>
                <br></br>

                {/* email */}
                <div>
                    <p style={errStyle} >{emailErr}</p>
                    <label>Email: </label>
                    <input name="email" type="text" value={formData.email} onChange={handleChange}></input>
                </div>
                <br></br>

                {/* confirm password - must adjust to confirm validation is matching password */}
                <div>
                    <p style={errStyle} >{confirmPasswordErr}</p>
                    <label>Confirm Passwrod: </label>
                    <input name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleChange}></input>
                </div>
                <br></br>

                {/* password - should we adjust type for password input? */}
                <div>
                    <p style={errStyle} >{passwordErr}</p>
                    <label>Password: </label>
                    <input name="password" type="password" value={formData.password} onChange={handleChange}></input>
                </div>
                <br></br>
                <button>Register</button>

            </fieldset>

            <div>
                <p>First Name: {firstName}</p>
                <p>Last Name: {lastName}</p>
                <p>Email: {email}</p>
                <p>Confirm Password: {confirmPassword}</p>
                <p>Password: {password}</p>

            </div>
        </form>
    );
};

export default UserForm;
