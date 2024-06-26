import { Send } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';

import './Form.scss';
import { changeInputMessage, sendMessage } from '../../actions/chat';

const Form = () => {
  const value = useSelector((state) => state.inputMessage);

  const dispatch = useDispatch();

  return (
    <form
      className="form"
      onSubmit={(event) => {
        event.preventDefault();
        const action = sendMessage();
        dispatch(action);
      }}
    >
      <input
        type="text"
        className="form-input"
        placeholder="Saisissez votre message"
        value={value}
        onChange={(event) => {
          const action = changeInputMessage(event.target.value);
          dispatch(action);
        }}
      />
      <button type="submit" className="form-submit">
        <Send size={40} />
      </button>
    </form>
  );
};

export default Form;
