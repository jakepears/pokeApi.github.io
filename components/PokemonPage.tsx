/** @format */
'use client';
import React, { useState, useEffect } from 'react';
import PokemonList from '@/components/PokemonList';
import PokemonDetails from '@/components/PokemonDetails';
import { Pokemon } from '@/types/index';

interface Props {
	pokemon: Pokemon[];
}
export default function PokemonPage({ pokemon }: Props) {
	const [selected, setSelected] = useState<Pokemon | null>(null);
	const handleSelect = (pokemon: Pokemon) => {
		setSelected(pokemon);
	};

	return (
		<section className='bg-[#F6F6F7] p-12 h-screen w-screen'>
			<PokemonList
				pokemon={pokemon}
				onSelect={handleSelect}
				onSortChange={() => setSelected(null)}
			/>
			<div className='h-3' />
			{selected && <PokemonDetails pokemon={[selected]} />}
		</section>
	);
}
