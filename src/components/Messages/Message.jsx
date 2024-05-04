import PropTypes from 'prop-types';

/**
 * Affiche un message
 */
const Message = ({ author, content }) => {
  return (
    <div className="message">
      <div className="message-author">{author}</div>
      <div className="message-content">{content}</div>
    </div>
  );
};

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Message;
