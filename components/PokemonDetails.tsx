/** @format */
import { Pokemon } from '@/types';

interface Props {
	pokemon: Pokemon[];
}
export default function PokemonDetails({ pokemon }: Props) {
	return (
		<div>
			{pokemon.map((pokemon) => (
				<h2 key={pokemon.id}>{pokemon.name}</h2>
			))}
			{/* Details */}
		</div>
	);
}
