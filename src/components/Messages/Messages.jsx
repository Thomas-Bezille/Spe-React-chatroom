import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';

import Message from './Message';

import './Messages.scss';

/**
 * Affiche tous les messages
 */
const Messages = () => {
  const messages = useSelector((state) => state.messages);

  const refContainer = useRef(null);

  useEffect(() => {
    const element = refContainer.current;
    element.scrollTo({
      left: 0,
      top: element.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  return (
    <div className="messages" ref={refContainer}>
      {messages.map((currentMessage) => (
        <Message key={currentMessage.id} {...currentMessage} />
      ))}
    </div>
  );
};

export default Messages;
