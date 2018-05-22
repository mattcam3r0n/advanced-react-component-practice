import React from "react";
import DateTime from "./DateTime";
import PropTypes from "prop-types";

export default function MessagePreview(props) {
  const { message } = props;
  return (
    <li className="message-preview">
      <a href="#">
        <div className="media">
          <span className="pull-left">
            <img
              className="media-object"
              src="http://placehold.it/50x50"
              alt=""
            />
          </span>
          <div className="media-body">
            <h5 className="media-heading">
              <strong>{message.name}</strong>
            </h5>
            {/*  <DateTime>   */}
            <DateTime date={message.date} />
            {/*  </DateTime>   */}
            <p>{message.message}</p>
          </div>
        </div>
      </a>
    </li>
  );
}

MessagePreview.propTypes = {
  message: PropTypes.object.isRequired,
};
