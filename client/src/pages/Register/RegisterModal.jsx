import { useState } from "react";
import "./RegisterModal.scss";

export default function RegisterModal() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userType, setUserType] = useState('job_seeker');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!firstName || !lastName || !email || !password || !confirmPassword || password !== confirmPassword) {
            alert('Please fill out all fields and ensure passwords match.');
            return;
        }

    };

    return (
        <div>
            <form className="register-form" onSubmit={handleSubmit}>
                <h2>Registration Form</h2>
                <div className="radio">
                    <div className="form-input">
                        <input
                            type="radio"
                            id="jobSeeker"
                            name="userType"
                            value="job_seeker"
                            checked={userType === 'job_seeker'}
                            onChange={(e) => setUserType(e.target.value)}
                        /> <span>Job Seeker</span>
                    </div>
                    <div className="form-input">
                        <input
                            type="radio"
                            id="employer"
                            name="userType"
                            value="employer"
                            checked={userType === 'employer'}
                            onChange={(e) => setUserType(e.target.value)}
                        /> <span>Employer</span>
                    </div>
                </div>
                <div className="form-input">
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={firstName}
                        onChange={(event) => setFirstName(event.target.value)}
                        placeholder="First Name"
                        required
                    />
                </div>
                <div className="form-input">
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={lastName}
                        onChange={(event) => setLastName(event.target.value)}
                        placeholder="Last Name"
                        required
                    />
                </div>
                <div className="form-input">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="form-input">
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        required
                    />
                </div>
                <div className="form-input">
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        placeholder="Confirm Password"
                        required
                    />
                </div>
                <div className="register-button">
                    <button type="submit">Register</button>
                </div>
            </form>

            <p>Already Registered? Go to Login</p>
        </div>
    );
}