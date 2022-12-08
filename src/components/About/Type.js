import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (<div style={{color:"#3f6b96"}}>
    <Typewriter
      options={{
        strings: [
          "Developer ",
          "React .js Developer",
          "Next .js Developer",
          "Full Stack Devloper",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  </div>);
}

export default Type;
