import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (<div style={{color:"#3f6b96"}}>
    <Typewriter
      options={{
        strings: [
          "Flutter and React Native ",
          "React .js Developer",
          "Php Developer",
          "Node.js Devloper",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  </div>);
}

export default Type;
