/** @format */
import PokemonPage from '@/components/PokemonPage';
import { Pokemon } from '@/types/index';

interface Props {
	pokemon: Pokemon[];
}
export default async function Home() {
	const { props } = await getData();
	return (
		<main>
			<PokemonPage pokemon={props.pokemon} />
		</main>
	);
}

async function getData() {
	// PokeApi data
	const pokeData = await fetch(
		'https://pokeapi.co/api/v2/pokemon?limit=12'
	).then((res) => res.json());

	const pokemon = await Promise.all(
		pokeData.results.map(async (p: any) => {
			// Fetch sprite
			const spriteRes = await fetch(
				`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`
			);
			const spriteBlob = await spriteRes.blob();
			const spriteURL = URL.createObjectURL(spriteBlob);

			return {
				name: p.name,
				sprite: spriteURL,
			};
		})
	);

	return {
		props: {
			pokemon,
		},
	};
}
