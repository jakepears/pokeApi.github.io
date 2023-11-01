/** @format */
'use client';
import React, { useState, useEffect } from 'react';
import PokemonList from '@/components/PokemonList';
import PokemonDetails from '@/components/PokemonDetails';
import { Pokemon } from '@/types/index';

interface Props {
	pokemon: Pokemon[];
	onSortChange: () => void;
}
export default function PokemonPage({ pokemon, onSortChange }: Props) {
	const [sortOrder, setSortOrder] = useState('id');
	const sortedPokemon = pokemon.sort((a, b) => {
		return a.id - b.id || a.name.localeCompare(b.name);
	});

	useEffect(() => {
		onSortChange();
	});
	const [selected, setSelected] = useState<Pokemon | null>(null);
	const handleSelect = (pokemon: Pokemon) => {
		setSelected(pokemon);
	};

	return (
		<section className='bg-[#F6F6F7] p-12 h-screen w-screen'>
			<h1 className='text-4xl mb-12'>All the Pokemon!</h1>
			<button onClick={() => setSortOrder('id')}>Sort by ID</button>
			<button onClick={() => setSortOrder('name')}>Sort by Name</button>
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
