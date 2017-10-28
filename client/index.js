import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
// import store from './store';
// import { Provider } from 'react-redux';
// import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  // <Provider store={store}>
  //   <Router>
    <div>
      <Main />
    </div>,
  //   </Router>
  // </Provider>,
  document.getElementById('app')
);
