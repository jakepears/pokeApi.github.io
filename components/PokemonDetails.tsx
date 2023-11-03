/** @format */
import { Pokemon } from '@/types';

interface Props {
	pokemon: Pokemon[];
}
export default function PokemonDetails({ pokemon }: Props) {
	return (
		<div>
			{pokemon.map((p) => (
				<>
					<h2 key={p.id}>{p.name}</h2>
					<h4 className='capitalize'>
						{p.name} is {p.height} decimeters tall and weighs {p.weight}{' '}
						hectograms. It can found {p.location_area_encounters}.
					</h4>
				</>
			))}
		</div>
	);
}
