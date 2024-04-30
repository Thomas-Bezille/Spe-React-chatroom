import Message from './Message';

import './Messages.scss';

/**
 * Affiche tous les messages
 */
const Messages = () => {
  return (
    <div className="messages">
      <Message />
      <Message />
      <Message />
    </div>
  );
};

export default Messages;
