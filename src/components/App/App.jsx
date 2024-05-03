import { useSelector } from 'react-redux';

import Form from '../Form/Form';
import Messages from '../Messages/Messages';
import Settings from '../Settings/Settings';

import './App.scss';

function App() {
  const isAuthentified = useSelector((state) => state.nickname !== '');

  return (
    <div className="App">
      <Settings />
      <Messages />
      {isAuthentified && <Form />}
    </div>
  );
}

export default App;
