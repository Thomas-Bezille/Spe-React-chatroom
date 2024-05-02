import { useSelector, useDispatch } from 'react-redux';
import { Plus } from 'react-feather';

import Field from '../Field/Field';
import { toggleSettingsOpen } from '../../actions/chat';

import './Settings.scss';

const Settings = () => {
  const isSettingsOpen = useSelector((state) => state.isSettingsOpen);
  const dispatch = useDispatch();

  let cssClassForButton = 'settings-toggle';
  if (isSettingsOpen) {
    cssClassForButton += ' settings-toggle--open';
  }

  return (
    <div className="settings">
      <button
        type="button"
        className={cssClassForButton}
        onClick={() => {
          dispatch(toggleSettingsOpen());
        }}
      >
        <Plus size="20px" />
      </button>
      {isSettingsOpen && (
        <form className="settings-form">
          <Field
            identifier="email"
            placeholder="pierre@poljak.com"
            label="E-mail"
            changeField={(identifier, newValue) => {
              console.log(
                `changeField (e-mail) : identifier=${identifier}, newValue=${newValue}`
              );
            }}
            type="email"
          />
          <Field
            identifier="password"
            placeholder=""
            label="Mot de passe"
            changeField={(identifier, newValue) => {
              console.log(
                `changeField (password) : identifier=${identifier}, newValue=${newValue}`
              );
            }}
            type="password"
          />
          <button type="submit" className="settings-submit">
            Envoyer
          </button>
        </form>
      )}
    </div>
  );
};

export default Settings;
