import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import Root from './Root';
import { createFirestoreInstance} from 'redux-firestore';
import { ReactReduxFirebaseProvider} from 'react-redux-firebase';
import fbConfig from './services/fbConfig/fbConfig'
import store from './services/store'

const rrfConfig = {
  userProfile: 'users',
  attachAuthIsReady: true,
  useFirestoreForProfile: true
};

const rrfProps = {
  firebase: fbConfig,
  config: rrfConfig,
  dispatch: store().dispatch,
  createFirestoreInstance
};

ReactDOM.render(
 <Root>
    <ReactReduxFirebaseProvider  {...rrfProps}>
        <App />
    </ReactReduxFirebaseProvider>
 </Root>,

document.getElementById('root'));


