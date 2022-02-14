import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Bitcoin from "../../assets/Bitcoin-pana.png"
import { UserContext } from "../../context/userContext";
import { GoogleAuth } from "../../services/Auth";


function Content() {
  const {user} = useContext(UserContext) 
  const contentStyle = {  padding: "5%",display:"flex",flexDirection:"row",alignItems:"center",flexWrap:"wrap",justifyContent:"space-between" };
  return (
    <div style={contentStyle}>
      <div>
        <h1 style={{width:"fit-content",margin:"0"}}>The Best way to <br /> Track your Crypto Currency</h1>
        {
          user?(<>
          
          <button className="cta-btn"><Link to="/bitcoin">Go to Dashboard</Link></button>
          </>):(
            <button className="cta-btn" onClick={()=>{GoogleAuth()}}>Get Started</button>
          )
        }
      </div>
      <img src={Bitcoin} width={300} alt="" />
      
    </div>
  );
}

export default Content;
