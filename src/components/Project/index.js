import React from "react";

function Project(props) {
  return (
    <div>
    <h4>Project name:</h4><h5>{props.name}</h5>
    <em><img src={process.env.PUBLIC_URL + props.image} style={{width: "200px", height: "200px"}}/></em>
     </div>
  );
}

export default Project;
