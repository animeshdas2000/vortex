import React from "react";
import styled from "styled-components";

import { RiHome2Line,RiLineChartLine,RiNewspaperLine} from "react-icons/ri";
const Panel = styled.div`
  background-color: #262157;
  color: #ffffff;
  padding-right: none;
  height: 100vh;
  padding-top: 20px;
  text-align: left;
  position: fixed;
  overflow-y: hidden;
  
`;
const Li = styled.li`
  padding: 10%;
  &:hover{
    cursor: pointer;
   /* background-color :#ffffff ;
   color:  #262157;
   border-radius: 10px; */
  }//fix hover for icons 
`;
const Ul = styled.ul`
  list-style-type: none;
  padding: 10px;
  
`;

const SidebarData = [
  {
    title: "Home",
    link: "/",
    icon: <RiHome2Line size="2.5em" color="#ffffff"/>,
  },
  //   {
  //     title: "Portfolio",
  //     link: "/",
  //     icon:
  //   },
  {
    title: "Markets",
    link: "/",
    icon: <RiLineChartLine size="2.5em" color="#ffffff" />,
  },
  {
    title: "News",
    link: "/",
    icon: <RiNewspaperLine size="2.5em" color="#ffffff"/>
  }
];
const Sidebar = () => {
  return (
    <Panel>
      <Ul>
        {SidebarData.map((data) => {
          return (
            <>
              <Li>{data.icon}{data.title}</Li>
            </>
          );
        })}
        {/* <Li>Logout</Li> */}
      </Ul>
    </Panel>
  );
};

export default Sidebar;
