import styled from "@emotion/styled"
import { Button, Dropdown, Menu} from "antd"
import { Row } from "components/lib"
import { useAuth } from "context/auth-context"
import React from "react"
import { ProjectListScreen } from "screens/project-list"
import {ReactComponent as SoftwareLogo} from 'assets/software-logo.svg'
import {Navigate,Route, Routes} from 'react-router'
import {BrowserRouter as Router} from "react-router-dom"
import { ProjectScrren } from "screens/project"
import { resetRoute } from "utils"
export const AuthenticatedApp=()=>{

  return (
<Container>
  <PageHeader></PageHeader>
  <Main>
  <Router>
  <Routes>
    <Route path={'/projects'} element={<ProjectListScreen></ProjectListScreen>}></Route>
    <Route path={'/projects/:projectId/*'} element={<ProjectScrren></ProjectScrren>}></Route>
    <Route path="/" element={<Navigate to={'/projects'}></Navigate>}></Route>
  </Routes>
  </Router>
  </Main>
</Container>
  ) 
  
}
const PageHeader=()=>{
  const {logout,user}=useAuth()
  const value:any=undefined
 return  <Header between={true}>
    <HeaderLeft gap={true}>
      <Button type={'link'} onClick={resetRoute}>
      <SoftwareLogo width={'18rem'} color={'rgb(38,132,255)'}></SoftwareLogo>
      </Button>
      <h2>项目</h2>
      <h2>用户</h2>
    </HeaderLeft>
    <HeaderRight>
      <Dropdown overlay={<Menu>
        <Menu.Item key={'logout'}>
          <Button type={'link'}   onClick={logout}>登出</Button>
          </Menu.Item>
      </Menu>}>
        <Button type={'link'} onClick={e=>e.preventDefault()}>
          Hi,{user?.name}
          </Button>
        </Dropdown>
    </HeaderRight>
  </Header>
}
const HeaderItem=styled.h3`
  margin-right: 3rem;
`
const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

// grid-area 用来给grid子元素起名字
const Header = styled(Row)`
padding:3.2rem;
box-shadow: 0 0 5px 0 rgba(0,0,0,0.1);
z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div`
`;
const Main = styled.main`

`;
