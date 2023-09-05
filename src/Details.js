import React from "react";
import { useParams } from "react-router-dom";


function Details ({info}) {
    const obj = useParams();
    const newdata=info.find(el=>el.id==obj.x)

return (
    <div>
    <iframe
      src={newdata.trailerSrc}
      id="videoFrame"
      className="custom-iframe"
    ></iframe>
      <p className="description">{newdata.description}</p>
  </div>
)
}
export default Details