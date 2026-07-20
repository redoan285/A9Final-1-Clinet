"use client"
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, InputGroup, Label, TextField, toast } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LoginPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [error, setError] = useState(null);
     const formHandler = async (e) => {
            e.preventDefault()
            const fromData = new FormData(e.target);
            const values = Object.fromEntries(fromData.entries());
            const { data, error } = await authClient.signIn.email({
                email: values.email, // required
                password: values.password, // required
            });
            if(data){
                toast.success("Login successful", {
                    actionProps: {
                      children: "Continue",
                        className: "bg-success text-white",
                    },
                    description: "Welcome back! You have successfully logged in to your healthcare portal.",
                })
                redirect("/")
            }
            if(error) {
                setError(error.message)
            } else {         
                       setError(null)
            }
        }

        const googleSignIn = async () => {
  const data = await authClient.signIn.social({
    provider: "google",
  });
};
    return (
        <div>
            <div className="md:w-8/10 mx-auto md:grid md:grid-cols-2 items-center md:my-6 my-3 bg-white shadow rounded-3xl ">
                <div className="max-md:hidden order-2">
                    <Image src={"https://lh3.googleusercontent.com/aida-public/AB6AXuAB5rflI-5J54JDBbsoFo545P1eWkIPKh_SbjbLXrL7ABzBQH9XYyc3tQi1HXjM_rBmT2R9oXdKk1m5cODUDaqkOnQ0e5CHwHbSdjck1LkNP2y7bRCqhSjy5nnInfWXSoos5gY-lUDLM_EnT4_msJpuospyQ6Jl9jyj7R5cpUVjzxSGXTQUMspO22HQjzMz2v151OPIIWWjN86mF1w-RFNEMX0qFHI60Wdcc3gSh6PzjIeHZD2N6Rl-Wd69pvgQ6C0MspRSDGy_O5xU"} alt="cool cow" height={300} width={650} className="rounded-r-3xl w-fill h-full"></Image>
                </div>

                <div className="md:p-10 p-6 bg-white rounded-3xl order-1">
                    <Form className="w-full" onSubmit={formHandler}>
                        <Fieldset>
                            <Fieldset.Legend className="text-3xl  title pb-2">Welcome Back</Fieldset.Legend>
                            <Description className="text text-base">
                                Log in to your healthcare portal to continue.
                            </Description>
                            {error && <p className="text-red-500 text-sm bg-red-100 p-2 rounded-md">{error}</p>}
                            <FieldGroup>
                                <TextField isRequired name="email" type="email">
                                    <Label className="font-medium text-sm secondary">Email Address</Label>
                                    <Input className="bg-[#f8f9ff] shadow-none placeholder:text-[#6B7280] rounded-2xl  border border-[#C3C6D7]" placeholder="Your Email" id="email" />
                                    <FieldError />
                                </TextField>

                                <TextField name="password" isRequired className="" minLength={6} validate={(value) => {
                                if (value.length < 6) {
                                    return "Password must be at least 6 characters";
                                }
                                if (!/[A-Z]/.test(value)) {
                                    return "Password must contain at least one uppercase letter";
                                }
                                if (!/[a-z]/.test(value)) {
                                    return "Password must contain at least one lowercase letter";
                                }
                                return null;
                            }}>
                                    <Label className="font-medium text-sm secondary">Password</Label>
                                    <InputGroup className="bg-[#f8f9ff] shadow-none rounded-2xl  border border-[#C3C6D7]">
                                        <InputGroup.Input
                                            className=" placeholder:text-[#6B7280]"
                                            type={isVisible ? "text" : "password"}
                                            placeholder="Your Password"
                                            id="password"

                                        />
                                        <InputGroup.Suffix className="pr-0 ">
                                            <Button
                                                isIconOnly
                                                aria-label={isVisible ? "Hide password" : "Show password"}
                                                size="sm"
                                                variant="ghost"
                                                onPress={() => setIsVisible(!isVisible)}
                                            >
                                                {isVisible ? <Eye className="size-4" /> : <EyeSlash className="size-4" />}
                                            </Button>
                                        </InputGroup.Suffix>
                                    </InputGroup>
                                    <FieldError />
                                </TextField>

                            </FieldGroup>
                            <Fieldset.Actions>
                                <Button type="submit" className="bg-[#004AC6] text-white" fullWidth>
                                    Login
                                </Button>
                            </Fieldset.Actions>

                        </Fieldset>
                    </Form>
                    <div className="grid grid-cols-3  mb-4 mt-6  items-center">
                        <div className="h-px bg-gray-300 mr-2"></div>
                        <p className="text-center text-[#737686] font-semibold text-xs whitespace-nowrap ">OR CONTINUE WITH</p>
                        <div className="h-px bg-gray-300 ml-2"></div>
                    </div>
                    <Button onClick={googleSignIn} className="w-full  my-1 bg-white  border border-[#C3C6D7] rounded-2xl" variant="ghost" >
                        <FcGoogle />
                        Google
                    </Button>
                    <p className="text text-center pt-2">Don&apos;t have an account? <Link href={'/register'} className="primary font-semibold ">Register</Link></p>

                </div>
            </div>
        </div>
    );
};

export default LoginPage;