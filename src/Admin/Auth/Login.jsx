/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
import bgImg from '../../assests/bg-img.jpg'

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    //   const handleLogin = async (e) => {
    //     e.preventDefault();
    //     try {
    //       const response = await axios.post(
    //         `https://yogastsankhlam-backend.vercel.app/auth/admin`, // Correct backend URL for the /admin route
    //         { username, password }, // Send username and password in the request body
    //         { withCredentials: true } // Include cookies for session handling
    //       );

    //       if (response.data.success) {
    //         // Save session or token if needed
    //         localStorage.setItem("token", "mockToken123"); // Optional: adjust based on backend logic
    //         navigate("/admin/dashboard"); // Redirect to the admin dashboard
    //       } else {
    //         setError(response.data.message); // Display backend error message
    //       }
    //     } catch (error) {
    //       setError("An error occurred while logging in");
    //       console.error("Login error:", error);
    //     }
    //   };


    const handleLogin = (e) => {
        e.preventDefault();

        // Dummy Login Logic
        const dummyCredentials = {
            username: "admin",
            password: "password123",
        };

        if (username === dummyCredentials.username && password === dummyCredentials.password) {
            // If credentials match, navigate to the dashboard
            localStorage.setItem("token", "dummyToken123"); // Simulate token storage
            navigate("/admin/dashboard");
        } else {
            // Set error message if credentials are invalid
            setError("Invalid username or password. Please try again.");
        }
    };

    return (
        <div className="position-relative d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
            {/* Background Image */}
            <img
                src={bgImg} // Replace with your actual image source
                alt="Background"
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{ objectFit: "cover",filter:"brightness(40%)" }}
            />

            {/* Heading Section */}

            {/* Login Form */}
            <div
                className="card shadow-lg p-6"
                style={{
                    maxWidth: "400px",
                    width: "100%",
                    backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent background
                    backdropFilter: "blur(10px)", // Optional blur effect
                }}
            >
                <h2 className="text-center fw-bold mb-3">Admin</h2>
                <p className="text-center text-secondary mb-3">Sign in to start your session</p>
                {/* Display error message if login fails */}
                {error && <p className="text-danger text-center mb-4">{error}</p>}
                <form onSubmit={handleLogin}>
                    {/* Username Field */}
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label fw-medium">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="form-control"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    {/* Password Field */}
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label fw-medium">
                            Password
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>
                    {/* Remember Me and Forgot Password Links */}
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">
                                Remember Me
                            </label>
                        </div>
                        <a href="#" className="text-decoration-none text-primary">
                            Forgot Password?
                        </a>
                    </div>
                    {/* Login Button */}
                    <button style={{backgroundColor:'#299e60'}} type="submit" className="btn w-100">
                        Login
                    </button>
                </form>
            </div>
        </div>

    );
};

export default LoginPage;
