/** @format */
import Image from 'next/image';
import { Pokemon } from '@/types';

interface Props {
	pokemon: Pokemon[];
	onSelect: (pokemon: Pokemon) => void;
}

export default function PokemonList({ pokemon, onSelect }: Props) {
	return (
		<div className='grid'>
			{pokemon.map((pokemon) => (
				<div key={pokemon.id}>
					<button onClick={() => onSelect(pokemon)}>{pokemon.name}</button>
				</div>
			))}
		</div>
	);
}
