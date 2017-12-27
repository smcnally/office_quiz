import React from 'react';
// import PropTypes from 'prop-types';

function Question(props) {

  return (
    <div>
    <h4 className="question">{props.content}</h4>
    {/* <img src={props.questionImageSrc} alt="" /> */}
    </div>
  );

}

Question.propTypes = {
  content: React.PropTypes.string.isRequired
};

export default Question;
