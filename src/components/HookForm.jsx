import React, {useState} from 'react'
import Display from './Display';

const HookForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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

    return (
        <div>
            <form>
                <div>
                    <label>First Name</label>
                    <input type='text' name='firstName' value={firstName} onChange={handleFirstName}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' name='lastName' value={lastName} onChange={handleLastName}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type='email' name='email' value={email} onChange={handleEmail}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' name='password' value={password} onChange={handlePassword}/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type='password' name='confirmPassword' value={confirmPassword} onChange={handleConfirmPassword}/>
                </div>
            </form>
            <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>
        </div>
    )
}

export default HookForm