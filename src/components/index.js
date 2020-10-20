import React from 'react';
import ReactDOM from 'react-dom';
import Checkout from './checkout'
import './index.scss'

const Index = () => (
	<div>
		<Checkout />
	</div>
);

ReactDOM.render(<Index />, document.getElementById('root'));

