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
import { Input } from "@/components/ui/input";
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

const Login = () => {
    const [loginInput, setLoginInput] = useState({ email: "", password: "" });
    const [signupInput, setSignupInput] = useState({ name: "", email: "", password: "" });

    const changeInputHandler = (event, type) => {
        const { name, value } = event.target;
        if (type === "login") {
            setLoginInput({ ...loginInput, [name]: value });
        } else {
            setSignupInput({ ...signupInput, [name]: value });
        }
    };

    const [registerUser, { data: registerData, error: registerError, isLoading: registerLoading , isSuccess : registerSuccess }] = useRegisterUserMutation();
    const [loginUser, { data: loginData, error: loginError, isLoading: loginLoading , isSuccess : loginSuccess}] = useLoginUserMutation();


    useEffect(() => {
        if (registerSuccess) {
            toast.success(registerData?.message || "Signup successful.");
        } else if (registerError) {
            toast.error(registerError?.data?.message || "Signup Failed");
        }
    }, [registerSuccess, registerError]); 
    
    useEffect(() => {
        if (loginSuccess) {
            toast.success(loginData?.message || "Login successful.");
        } else if (loginError) {
            toast.error(loginError?.data?.message || "Login Failed");
        }
    }, [loginSuccess, loginError]);
    
    const handleRegistration = async (type) => {
        try {
            const inputData = type === "signup" ? signupInput : loginInput;
            const action = type === "signup" ? registerUser : loginUser;
            const response = await action(inputData).unwrap();
            if(type === "signup"){
                setSignupInput({email : "" , password : ""});
            }else{
                setLoginInput({ name: "", email: "", password: "" });
            }
            console.log(`${type} successful:`, response);
        } catch (error) {
            console.log(`Error during ${type}:` + error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
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
                            <div className="space-y-1">
                                <Label htmlFor="name">Username</Label>
                                <Input id="name" placeholder="Enter Username" name="name"
                                    value={signupInput.name} onChange={(event) => changeInputHandler(event, "signup")} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter Email" name="email"
                                    value={signupInput.email} onChange={(event) => changeInputHandler(event, "signup")} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" placeholder="Enter Password" name="password"
                                    value={signupInput.password} onChange={(event) => changeInputHandler(event, "signup")} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={registerLoading} onClick={() => handleRegistration("signup")}>
                                {registerLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                                    </>
                                ) : "Sign Up"}
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
                            <div className="space-y-1">
                                <Label htmlFor="login-email">Email</Label>
                                <Input id="login-email" type="email" name="email" placeholder="Enter Email"
                                    value={loginInput.email} onChange={(event) => changeInputHandler(event, "login")} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="login-password">Password</Label>
                                <Input id="login-password" type="password" name="password" placeholder="Enter Password"
                                    value={loginInput.password} onChange={(event) => changeInputHandler(event, "login")} />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button disabled={loginLoading} onClick={() => handleRegistration("login")}>
                                {loginLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                                    </>
                                ) : "Login"}
                            </Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default Login;
