import './Form.scss';

const Form = () => {
  return (
    <form className="form">
      <input
        type="text"
        className="form-input"
        placeholder="Saisissez votre message"
      />
      <button type="submit" className="form-submit">
        OK
      </button>
    </form>
  );
};

export default Form;
