import { useAuth } from "context/auth-context";
import qs from "qs";
import React, { FormEvent } from "react";
import { cleanObject } from "utils";
import { Button, Form, Input } from "antd";
import { LongButton } from "unauthenticated-app";
import { useAsync } from "utils/use-async";
export const LoginScreen=({onError}:{onError:(error:Error)=>void })=>{
    const {login,user}=useAuth()
    const {run,isLoading}=useAsync(undefined,{throwOnError:true})
    const handleSubmit=async (values:{username:string,password:string})=>{
        try {
           await run(login(values))
        } catch (e:any) {
            onError(e)
        }
    }
    return <Form onFinish={handleSubmit}>
        <Form.Item name={'username'} rules={[{required:true,message:"请输入用户名"}]}>
        <Input placeholder={"用户名"} type="text" id={'username'} />
        </Form.Item>
        <Form.Item name={"password"} rules={[{required:true,message:"请输入密码"}]}>
            <Input type="password" id={'password'} placeholder={"密码"} />
        </Form.Item>
        <Form.Item>
        <LongButton loading={isLoading} htmlType={"submit"}  type={"primary"}>登录</LongButton>
        </Form.Item>
    </Form>
}