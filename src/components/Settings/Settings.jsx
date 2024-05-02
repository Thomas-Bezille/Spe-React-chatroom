import Field from '../Field/Field';

import './Settings.scss';

const Settings = () => {
  return (
    <div className="settings">
      <button type="button" className="settings-toggle">
        X
      </button>
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
    </div>
  );
};

export default Settings;
