import React from "react";

function Finished(props) {
  return (
    <div className="task finished" onClick={props.onClick}>
      <p>
        <span>
          {props.ind >= 10 ? props.ind : "0" + props.ind}.&nbsp;&nbsp;
        </span>
        {props.task.name}
      </p>
      <span className="delete-btn" onClick={props.onDel}>
        X
      </span>
    </div>
  );
}
export default Finished;
