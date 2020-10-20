import React from 'react';

export default props => (
	<figure className='card' aria-label='checagem de dados do cartão de crédito'>
		<img src='/images/svg/card-bg.png' aria-hidden='true'/>
		<figcaption className='card__figcaption'>
			<img src={props.brandUrl} alt="bandeira {props.brand}" /> 
			<div className='card__number'>{props.number}</div>
			<span className='card__name'>{props.name}</span>
			<span className='card__expiration'>{props.expiration}</span>
		</figcaption>
	</figure>
);

