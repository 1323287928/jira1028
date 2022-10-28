import { SearchPanel } from "./search-panel"
import { List } from "./list"
import React from "react"
import {useEffect,useState} from "react"
import { cleanObject, useDebounce, useMount } from "screens/utils"
import qs from "qs"
const apiUrl=process.env.REACT_APP_API_URL
export const ProjectListScreen=()=>{
    const [users,setUsers]=useState([])
    const [param,setParam]=useState({
        name:"",
        personId:""
    })
    const debouncedParam=useDebounce(param,2000)
    const [list,setList]=useState([])
    useEffect(()=>{
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response=>{
            if(response.ok){
                setList(await response.json())
            }
        })
    },[debouncedParam])
    useMount(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setUsers (await response.json())
            }
        })
    })
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}></SearchPanel>
        <List list={list} users={users}></List>
    </div>
}