import React from "react";
import PropTypes from "prop-types";

export default function DateTime(props) {
  return (
    <p className="small text-muted">
      <i className="fa fa-clock-o" /> {props.date}
    </p>
  );
}

DateTime.propTypes = {
  date: PropTypes.string.isRequired,
};
