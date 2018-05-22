import React from "react";
import PropTypes from "prop-types";

export default function TaskItem(props) {
  const { task } = props;
  return (
    <a href="#" className="list-group-item">
      <span className="badge">{task.date}</span>
      <i className="fa fa-fw fa-calendar" /> {task.task}
    </a>
  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired,
};
