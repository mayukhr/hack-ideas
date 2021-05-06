import React, { useState } from "react";

const LoginForm = (props) => {
    const [employeeId, setEmployeeId] = useState("");
    
    const handleSubmit = e => {
        props.setUser(employeeId);
        localStorage.setItem('user', employeeId);
        console.log(employeeId);
    };

    return (
        <div className="App">
            <div className="wrapper">
                <img src="logo.svg" className="logo" alt="Logo" />
                <h1 className="title">Log in</h1>
                <p className="description">Please use your Employee Id</p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="username" className="form-label">
                            Employee Id
                        </label>
                        <input
                            className="form-input"
                            type="text"
                            id="username"
                            placeholder="Enter your Employee Id"
                            onChange={({ target }) => setEmployeeId(target.value)}
                            value={employeeId}
                        />
                    </div>
                    <button className="btn-primary" type="submit"> 
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;