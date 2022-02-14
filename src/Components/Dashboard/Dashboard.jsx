import React from "react";
import Content from "./Content";
import About from "../About";
// import Sidebar from "./Sidebar";

// const DashBoardStyles = {
//   display: "flex",
//   flexDirection: "row",
// };
const Dashboard = () => {
  return (
    // <div style={DashBoardStyles}>
    <>
      {/* <aside>
        <Sidebar />
      </aside> */}
      <main>
        <Content />
        <About/>
      </main>
    </>
  );
};

export default Dashboard;
