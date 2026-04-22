import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./authSlice";
import Input from "../../shared/components/input";
import Button from "../../shared/components/button";

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { isLoading, error } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await dispatch(loginUser(credentials));
        if (loginUser.fulfilled.match(result)) {
            navigate('/products');
        } else {
            console.log("Login Failed:", result.payload);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
                    <p className="text-gray-500 mt-2">Please enter your details to login</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                        <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-medium border border-red-100">
                            {error}
                        </div>
                    )}

                    <Input
                        label="Username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        placeholder="Enter your username (e.g., emilys)"
                        required
                    />

                    <Input
                        label="Password"
                        type="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="••••••••"
                        required
                    />

                    <Button
                        type="submit"
                        className="w-full py-3 bg-blue-500 text-white rounded-lg"
                    >
                        {isLoading ? 'Authenticating...' : 'Sign In'}
                    </Button>
                </form>
            </div>
        </div>

    )
}

export default Login
