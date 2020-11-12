import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { RecoilRoot } from 'recoil';
import { BreadProvider } from 'material-bread'

const theme = {
  primary: {
    main: '#333333',
    button: '#76ff03',
    buttonText: '#000000'
  },
  background: {
    default: '#333333',
  },
  textColor: {
    primary: '#FFFFFF',
    secondary: '#000000',
  }
};

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <BreadProvider value={theme}>
        <App />
      </BreadProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
