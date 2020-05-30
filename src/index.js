import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MetaTags from 'react-meta-tags'

ReactDOM.render(
  <div>
    <MetaTags>
      <title>RISF Interativo</title>
      <meta name="description" content="Regimento Interno Interativo do Senado Federal" />
      <meta property="og:title" content="RISF Interativo" />
<<<<<<< HEAD
      {/*
        <meta property="og:image" content="path/to/image.jpg" />
      */}
=======
      {/*}<meta property="og:image" content="path/to/image.jpg" />*/}
>>>>>>> 98e8e7b8b35a7ed00fc1e0d8b8bceb41db0a84e5
    </MetaTags>
    <App />
  </div>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
