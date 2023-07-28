import React from 'react'

const Display = (props) => {

    const {firstName, lastName, email, password, confirmPassword} = props;

    return (
        <div>
            <h3>Your Form Data</h3>
            <div>
                First Name: {firstName}
            </div>
            <div>
                Last Name: {lastName}
            </div>
            <div>
                Email: {email}
            </div>
            <div>
                Password: {password}
            </div>
            <div>
                Confirm Password: {confirmPassword}
            </div>
        </div>
    )
}

export default Display