import { useSelector } from 'react-redux';

import Message from './Message';

import './Messages.scss';

/**
 * Affiche tous les messages
 */
const Messages = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <div className="messages">
      {messages.map((currentMessage) => (
        <Message key={currentMessage.id} {...currentMessage} />
      ))}
    </div>
  );
};

export default Messages;
