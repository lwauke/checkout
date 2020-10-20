import React from 'react';
import Card from '../card';

export default () => (
	<section className='card-section'>
		<a className='card-section__link' href='#'>
			Alterar forma de pagamento
		</a>
		<h2 className='card-section__subtitle'>
			<img alt='ícone de cartão de crédito' src='/images/svg/card-icon.svg' />
			Adicione um novo cartão de crédito
		</h2>
		<Card
			number='**** **** **** ****'
			name='Nome do titular'
			expiration='00/00'
			brandUrl='#'
			brand='visa'
		/>
	</section>
);
