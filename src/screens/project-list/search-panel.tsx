
import { jsx } from "@emotion/react";
import React from "react"
import { Form, Input, Select } from "antd";
import { Project } from "./list";
import { UserSelect } from "components/user-select";
export interface User{
    id:number;
    name:string;
    email:string;
    title:string;
    organization:string;
    token:string;
}
interface SearchPanelProps{
    users:User[],
    param:Partial<Pick<Project,'name'|'personId'>>,
    setParam:(param:SearchPanelProps["param"])=>void;
}
export const SearchPanel=({users,param,setParam}:SearchPanelProps)=>{
        return <Form layout={"inline"} style={{marginBottom:'2rem'}}>
        <Form.Item>
        {/* setParam(Object.assign({},param,{name:evt.target.value})) */}
            <Input type="text" placeholder={"项目名"}  value={param.name} onChange={evt=>setParam({
                ...param,
                name:evt.target.value
            })}/>
                  </Form.Item>
            <Form.Item>
                <UserSelect 
                defaultOptionName={'负责人'}
                value={param.personId} 
                onChange={(value)=>{
                    setParam({
                        ...param,
                        personId:value
                    })
                }}></UserSelect>
            </Form.Item>
  
    </Form>
}