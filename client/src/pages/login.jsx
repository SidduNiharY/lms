import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs";
import { useLoginUserMutation, useRegisterUserMutation } from '@/features/api/authApi';
import { Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';

const AuthInput = ({ id, label, type, value, onChange }) => (
    <div className="space-y-1">
        <Label htmlFor={id}>{label}</Label>
        <Input id={id} type={type} placeholder={`Enter ${label}`} name={id} value={value} onChange={onChange} />
    </div>
);

const Login = () => {
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });

    const navigate = useNavigate();

    const changeInputHandler = (event, type) => {
        const { name, value } = event.target;
        if (type === "login") {
            setLoginInput({ ...loginInput, [name]: value });
        } else {
            setSignupInput({ ...signupInput, [name]: value });
        }
    };

    const [registerUser, { data: registerData, error: registerError, isLoading: registerLoading, isSuccess: registerSuccess }] = useRegisterUserMutation();
    const [loginUser, { data: loginData, error: loginError, isLoading: loginLoading, isSuccess: loginSuccess }] = useLoginUserMutation();

    useEffect(() => {
        if (registerSuccess) {
            toast.success(registerData?.message || "Signup successful.");
        } else if (registerError?.data?.message) {
            toast.error(registerError.data.message || "Signup Failed");
        }
    }, [registerSuccess, registerError, registerData]);

    useEffect(() => {
        if (loginSuccess) {
            toast.success(loginData?.message || "Login successful.");
            navigate("/");
        } else if (loginError?.data?.message) {
            toast.error(loginError.data.message || "Login Failed");
        }
    }, [loginSuccess, loginError, loginData]);

    const handleRegistration = async (type) => {
        try {
            const inputData = type === "signup" ? signupInput : loginInput;
            const action = type === "signup" ? registerUser : loginUser;
            await action(inputData).unwrap();
            if (type === "signup") {
                setSignupInput({ name: "", email: "", password: "" });
            } else {
                setLoginInput({ email: "", password: "" });
            }
        } catch (error) {
            console.error(`Error during ${type}:`, error);
        }
    };

    return (
        <div className="flex items-center w-full justify-center mt-16">
            <Tabs defaultValue="signup" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                    <TabsTrigger value="login">Login</TabsTrigger>
                </TabsList>

                <TabsContent value="signup">
                    <Card>
                        <CardHeader>
                            <CardTitle>Register</CardTitle>
                            <CardDescription>Create a new account</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <AuthInput id="name" label="Username" type="text" value={signupInput.name} onChange={(event) => changeInputHandler(event, "signup")} />
                            <AuthInput id="email" label="Email" type="email" value={signupInput.email} onChange={(event) => changeInputHandler(event, "signup")} />
                            <AuthInput id="password" label="Password" type="password" value={signupInput.password} onChange={(event) => changeInputHandler(event, "signup")} />
                        </CardContent>
                        <CardFooter>
                            <Button disabled={registerLoading} onClick={() => handleRegistration("signup")}> 
                                {registerLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</>) : "Sign Up"}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>

                <TabsContent value="login">
                    <Card>
                        <CardHeader>
                            <CardTitle>Login</CardTitle>
                            <CardDescription>Access your account</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <AuthInput id="email" label="Email" type="email" value={loginInput.email} onChange={(event) => changeInputHandler(event, "login")} />
                            <AuthInput id="password" label="Password" type="password" value={loginInput.password} onChange={(event) => changeInputHandler(event, "login")} />
                        </CardContent>
                        <CardFooter>
                            <Button disabled={loginLoading} onClick={() => handleRegistration("login")}>
                                {loginLoading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait</>) : "Login"}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Login;