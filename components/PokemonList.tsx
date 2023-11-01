/** @format */
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Pokemon } from '@/types';
import Bulba from '@/public/Image.png';

interface Props {
	pokemon: Pokemon[];
	onSelect: (pokemon: Pokemon) => void;
	onSortChange: () => void;
}

export default function PokemonList({
	pokemon,
	onSelect,
	onSortChange,
}: Props) {
	return (
		<div className='grid grid-cols-4 gap-4'>
			{pokemon.map((pokemon) => (
				<div
					className='flex items-center p-4 border rounded capitalize w-full h-auto m-2'
					key={pokemon.id}>
					<Image src={Bulba} alt={pokemon.name} height={72} />
					<div className='w-3' />
					<button className='capitalize ml-2' onClick={() => onSelect(pokemon)}>
						{pokemon.name}
					</button>
				</div>
			))}
		</div>
	);
}
