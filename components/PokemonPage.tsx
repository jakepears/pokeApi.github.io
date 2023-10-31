/** @format */

import React, { useState } from 'react';
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
		<section>
			<PokemonList pokemon={pokemon} onSelect={handleSelect} />
			{selected && <PokemonDetails pokemon={selected} />}
		</section>
	);
}
