import './main.scss';

import Module from './module';
Module.date();



import * as React from 'react';
import {render} from 'react-dom';

import {Cards} from "./components/Cards";


render(<Cards/>,document.getElementById('myapp'));