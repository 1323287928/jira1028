import { SearchPanel } from "./search-panel"
import { List, Project } from "./list"
import React from "react"
import {useEffect,useState} from "react"
import { cleanObject, useDebounce, useMount } from "utils"
import * as qs from "qs"
import { useHttp } from "utils/http"
import styled from "@emotion/styled"
import { Typography } from "antd"
import { useAsync } from "utils/use-async"
import { useProjects } from "utils/project"
import { useUsers } from "utils/user"
const apiUrl=process.env.REACT_APP_API_URL
export const ProjectListScreen=()=>{
    const [param,setParam]=useState({
        name:"",
        personId:""
    })
    const debouncedParam=useDebounce(param,500)
    const client=useHttp()
    const {isLoading,error,data:list}=useProjects(debouncedParam)
    const {data:users}=useUsers()

    return <Container>
        <h1>项目列表</h1>
        <SearchPanel users={users||[]} param={param} setParam={setParam}></SearchPanel>
        {error?<Typography.Text type={"danger"}>{error.message}</Typography.Text>:null}
        <List dataSource={list||[]} users={users||[]} loading={isLoading}></List>
    </Container>
}
const Container=styled.div`
    padding: 3.2rem;

`