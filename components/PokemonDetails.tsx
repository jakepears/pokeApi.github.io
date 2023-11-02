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
			this is a super cool pokemon that can battle and hurt other pokemon, but
			in a fun cartoon way
		</div>
	);
}
