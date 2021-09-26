import axios from "axios";
import React, { useState, useEffect } from "react";
import Tracker from "../../pages/Tracker";
import Crypto from "../Crypto";

function Content() {
  const contentStyle = { marginLeft: "15%", padding: "5%" };
  return (
    <div style={contentStyle}>
      <Tracker />
    </div>
  );
}

export default Content;
