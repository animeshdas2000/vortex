import React from "react";
import Tracker from "../../pages/Tracker";

function Content() {
  const contentStyle = { marginLeft: "10%", padding: "5%" };
  return (
    <div style={contentStyle}>
      <Tracker />
    </div>
  );
}

export default Content;
