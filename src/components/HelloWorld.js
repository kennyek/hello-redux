import React from "react";
import PropTypes from 'prop-types';

const HelloWorld = props => {
  return (
    <div className="hello-world">
      Hello World <span className="hello-world__tech">{props.technology}!</span>
    </div>
  );
};

HelloWorld.propTypes = {
  technology: PropTypes.string.isRequired
};

export default HelloWorld;
