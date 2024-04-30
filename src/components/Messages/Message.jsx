import PropTypes from 'prop-types';

/**
 * Affiche un message
 */
const Message = ({ author, text }) => {
  return (
    <div className="message">
      <div className="message-author">{author}</div>
      <div className="message-content">{text}</div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Message;
