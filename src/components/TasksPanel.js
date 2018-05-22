import React from "react";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

export default function TasksPanel(props) {
  const { tasks } = props;
  const taskItems = tasks.map((t) => {
    return <TaskItem key={t.id} task={t} />;
  });
  return (    
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title">
          <i className="fa fa-clock-o fa-fw" /> Tasks Panel
        </h3>
      </div>
      <div className="panel-body">
        <div className="list-group">
          {/*   <TaskItem>    */}
          { taskItems }
          {/*   </TaskItem>    */}
        </div>
        <div className="text-right">
          <a href="#">
            View All Activity <i className="fa fa-arrow-circle-right" />
          </a>
        </div>
      </div>
    </div>
  );
}

TasksPanel.propTypes = {
  tasks: PropTypes.array.isRequired,
};
