import React from 'react';

const RegistrationScreen = () => {
    return (
        <div className="container" style={{maxWidth: '600px'}}>
            <h1 className="mt-4 mb-3">Registration</h1>
            <div class="mb-3">
                <label for="exampleInputFirstName1" class="form-label">First name</label>
                <input type="text" class="form-control" id="exampleInputFirstName1" aria-describedby="firstNameHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputLastName1" class="form-label">Last name</label>
                <input type="text" class="form-control" id="exampleInputLastName1" aria-describedby="lastNameHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
                <label for="exampleInputDob1" class="form-label">Date of Birth</label>
                <input type="text" class="form-control" id="exampleInputDob1" aria-describedby="dobHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputphoneNumber1" class="form-label">Phone Number</label>
                <input type="text" class="form-control" id="exampleInputphoneNumber1" aria-describedby="phoneNumberHelp"/>
            </div>
            <div class="mb-3">
                <label for="exampleInputaddress1" class="form-label">Address</label>
                <input type="text" class="form-control" id="exampleInputaddress1" aria-describedby="addressHelp"/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
}

export default RegistrationScreen;