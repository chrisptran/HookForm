import React, { useState } from 'react'
import Display from './Display';

const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [firstNameFocused, setFirstNameFocused] = useState(false)
    const [lastNameFocused, setLastNameFocused] = useState(false)
    const [emailFocused, setEmailFocused] = useState(false)
    const [passwordFocused, setPasswordFocused] = useState(false)
    const [passwordMatchFocused, setPasswordMatchFocused] = useState(false)

    const handleFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }

    const handleFirstNameFocused = () => {
        setFirstNameFocused(true);
    };

    const handleLastNameFocused = () => {
        setLastNameFocused(true);
    };

    const handleEmailFocused = () => {
        setEmailFocused(true);
    };

    const handlePasswordFocused = () => {
        setPasswordFocused(true);
    };

    const handlePasswordMatchFocused = () => {
        setPasswordMatchFocused(true);
    };


    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type='text' name='firstName' value={firstName} onChange={handleFirstName} onFocus={handleFirstNameFocused} />
                    {
                        firstNameFocused && firstName.length < 2 &&
                        <span style={{ color: "red" }}>First Name must be 2 characters long</span>
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' name='lastName' value={lastName} onChange={handleLastName} onFocus={handleLastNameFocused} />
                    {
                        lastNameFocused && lastName.length < 2 &&
                        <span style={{ color: "red" }}>Last Name must be 2 characters long</span>
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' value={email} onChange={handleEmail} onFocus={handleEmailFocused} />
                    {
                        emailFocused && email.length < 5 &&
                        <span style={{ color: "red" }}>Email must be 5 characters long</span>
                    }
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={password} onChange={handlePassword} onFocus={handlePasswordFocused} />
                    {
                        passwordFocused && password.length < 8 &&

                        <span style={{ color: "red" }}>Password must be 8 characters long</span>
                    }

                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword' value={confirmPassword} onChange={handleConfirmPassword} onFocus={handlePasswordMatchFocused} />
                    {
                        passwordMatchFocused && password === confirmPassword &&
                        <span style={{ color: "red" }}> Password must match</span>
                    }
                </div>
            </form>
            <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword} />
        </div>
    )
}

export default HookForm