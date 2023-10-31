/** @format */
import PokemonPage from '@/components/PokemonPage';
import { Pokemon } from '@/types/index';

export default async function Home({ pokemon }: { pokemon: Pokemon[] }) {
	const { props } = await getData();
	return (
		<main>
			<PokemonPage pokemon={props.pokemon} />
		</main>
	);
}

export async function getData() {
	const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=12');
	const data = await res.json();

	const pokemon = data.results.map((result: any) => {
		return {
			name: result.name,
		};
	});

	return {
		props: {
			pokemon,
		},
	};
}
