import React from "react";

function EmptyTask() {
  const emptySrc =
    "https://cdn.glitch.com/b36c8d16-86f3-4325-b69d-19435bafcb6e%2Fundraw_not_found_60pq%20(1).svg?v=1593354617814";
  return (
    <div className="empty-task">
      <img alt="img" src={emptySrc} />
      <p>Seems likes you have no task</p>
    </div>
  );
}

export default EmptyTask;
