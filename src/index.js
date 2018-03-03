import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FilterableProductTable from './App';
import {PRODUCTS} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<FilterableProductTable products={PRODUCTS} />, document.getElementById('root'));
registerServiceWorker();
