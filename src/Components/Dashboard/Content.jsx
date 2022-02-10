import React from "react";
import Bitcoin from "../../assets/Bitcoin-pana.png"
import Tracker from "../../pages/Tracker";

function Content() {
  const contentStyle = {  padding: "5%",display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between" };
  return (
    <div style={contentStyle}>
      <div>
        <h1 style={{width:"fit-content",margin:"0"}}>The Best way to <br /> Track your Crypto Currency</h1>
        <button className="cta-btn">Get Started</button>
      </div>
      <img src={Bitcoin} width={300} alt="" />
      
    </div>
  );
}

export default Content;
