import { useAuth } from "context/auth-context";
import qs from "qs";
import React, { FormEvent } from "react";
import { cleanObject } from "utils";

export const LoginScreen=()=>{
    const {login,user}=useAuth()
    const handleSubmit=(event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        const username=(event.currentTarget.elements[0] as HTMLInputElement).value
        const password=(event.currentTarget.elements[1] as HTMLInputElement).value
        login({username,password})
    }
    return <form onSubmit={handleSubmit}>
        <div>
        <label htmlFor="username">用户名</label>
        <input type="text" id={'username'} />
        </div>
        <div>
            <label htmlFor="password">密码</label>
            <input type="password" id={'password'} />
        </div>
        <button type={"submit"}>登录</button>
    </form>
}