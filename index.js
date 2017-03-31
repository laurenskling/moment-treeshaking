'use strict';

import React from 'react';
import { render } from 'react-dom';

import moment from 'moment';
// import 'moment/locale/nl';
moment.locale('nl');

const Root = () => (
  <div>
    <h1>Hello world</h1>
    <span>This is the dutch time: {moment().format('MMMM Do YYYY, h:mm:ss a')}</span>
  </div>
);

render(<Root />, document.body.appendChild(document.createElement('div')));
