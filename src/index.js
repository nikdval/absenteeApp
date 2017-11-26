import React from 'react';
import { render } from 'react-dom';
import App from 'components/app';
import events from 'data/events';

render(<App events = {events} />, document.getElementById('app'));
