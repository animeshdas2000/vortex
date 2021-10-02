import React from "react";
import styled from "styled-components";
import { HomeIcon, ChartBarIcon } from "@heroicons/react/outline";
const Panel = styled.div`
  background-color: #ffffff;
  padding-right: 30px;
  height: 100vh;
  padding-top: 20px;
  text-align: left;
  position: fixed;
  overflow-y: hidden;
`;
const Li = styled.li`
  padding: 10%;
`;
const Ul = styled.ul`
  list-style-type: none;
  padding: none;
`;

const SidebarData = [
  {
    title: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  //   {
  //     title: "Portfolio",
  //     link: "/",
  //     icon:
  //   },
  {
    title: "Markets",
    link: "/",
    icon: <ChartBarIcon />,
  },
];
const Sidebar = () => {
  return (
    <Panel>
      <Ul>
        {SidebarData.map((data) => {
          return (
            <>
              <span> {data.icon}</span>
              <Li>{data.title}</Li>
            </>
          );
        })}
        {/* <Li>Logout</Li> */}
      </Ul>
    </Panel>
  );
};

export default Sidebar;
