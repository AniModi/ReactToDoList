import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TODO from "./components/App"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <>
  <div id="body">
    <TODO/>
  </div>
  </>
);

reportWebVitals();