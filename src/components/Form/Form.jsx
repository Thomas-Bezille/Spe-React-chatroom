import { Send } from 'react-feather';
import { useSelector } from 'react-redux';

import './Form.scss';

const Form = () => {
  const value = useSelector((state) => state.inputMessage);

  return (
    <form className="form">
      <input
        type="text"
        className="form-input"
        placeholder="Saisissez votre message"
        value={value}
      />
      <button type="submit" className="form-submit">
        <Send size={40} />
      </button>
    </form>
  );
};

export default Form;
