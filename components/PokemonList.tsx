/** @format */
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Pokemon } from '@/types';
import Bulba from '@/public/Image.png';
import { RadioIndicator } from './RadioLabel';
import PokemonDetails from './PokemonDetails';

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
	const [sortOrder, setSortOrder] = useState(null as string | null);
	const [activeSort, setActiveSort] = useState(null as string | null);

	const sortedPokemon = useMemo(() => {
		pokemon.sort((a, b) => {
			if (sortOrder === 'id') {
				return a.id - b.id;
			} else {
				return a.name.localeCompare(b.name);
			}
		});
	}, [sortOrder, pokemon]);

	const handleSortChange = (type: string) => {
		setSortOrder(type);
		setActiveSort(type);
	};

	useEffect(() => {
		onSortChange();
	}, [sortOrder, onSortChange, activeSort]);

	return (
		<section>
			<div className='flex items-center m-0 p-0 relative mb-12'>
				<h1 className='text-4xl'>All the Pokemon!</h1>
				<div className='ml-auto flex'>
					<button
						className='col-span-4 py-1 px-2'
						onClick={() => handleSortChange('name')}>
						<RadioIndicator isSelected={activeSort === 'name'} />
						Sort By Name
					</button>
					<button
						className='col-span-4 py-1 px-2'
						onClick={() => handleSortChange('id')}>
						<RadioIndicator isSelected={activeSort === 'id'} />
						Sort By ID
					</button>
				</div>
			</div>
			<div className='grid grid-cols-4 gap-4'>
				{pokemon.map((p) => (
					<div
						className='flex items-center p-4 border rounded capitalize w-full h-auto m-2'
						key={p.id}>
						<Image src={Bulba} alt={p.name} height={72} />
						<div className='w-3' />
						<button className='capitalize ml-2' onClick={() => onSelect(p)}>
							{p.name}
						</button>
					</div>
				))}
			</div>
			<PokemonDetails pokemon={[]} />
			<button className='capitalize ml-2 border rounded-sm border-[#024E74] p-3 mt-48'>
				Previous 12
			</button>
			<button className='capitalize ml-2 border rounded-sm border-[#024E74] p-3 right-12 absolute mt-48'>
				Next 12
			</button>
		</section>
	);
}
