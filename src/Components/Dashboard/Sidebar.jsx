import React from 'react'
import styled from 'styled-components'

const Panel = styled.div `
    background-color: grey;
    padding: 5%;
     height:100vh;
    text-align: left;
    position: fixed;
    overflow-y: hidden;
   

`
const Li = styled.li`
   padding: 10%;

`
const Ul = styled.ul `
     list-style-type: none;
    padding: none;
`
const SidebarData =[
    {
        title:"Home",
        link:"/"
    },
    {
        title:"Portfolio",
        link:"/"
    }, {
        title:"Markets",
        link:"/"
    }, 
]
const Sidebar = () => {
    return (
        <Panel>
            <Ul>
                {SidebarData.map((data)=>{
                    return(
                        <Li>{data.title}</Li>
                    )
                })}
                <Li>Logout</Li>
            </Ul>
        </Panel>
      
    )
}

export default Sidebar
